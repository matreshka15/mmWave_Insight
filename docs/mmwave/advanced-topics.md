# 高级主题

!!! abstract "章节概述"
    本章汇集毫米波雷达工程实践中的 **进阶话题**，适合在掌握基础链路后深入阅读：

    - 相位噪声（Phase Noise）建模与影响
    - 发射泄漏（TX Leakage）与对消
    - 杂波抑制（Clutter / MTI / STAP）
    - 非线性 Chirp 校准
    - 点云生成与坐标系
    - 微多普勒（Micro-Doppler）签名
    - 典型 SDK 处理链实时性

---

## 📉 1. 相位噪声

!!! info "定义"
    相位噪声是本振（LO）频率谱在载波周围的随机起伏，常以 **偏置频率处的功率谱密度** $\mathcal{L}(f)$ [dBc/Hz] 表示。

### 1.1 对 FMCW 的影响

FMCW 使用自混频（dechirp），发射与接收本振 **相关**，近距目标相位噪声大部分被抵消（*range correlation effect*），远距目标相位噪声泄漏增大：

$$
\sigma_\phi^2(R) \approx 2\!\int_0^\infty \mathcal{L}(f)\left[1 - \cos\!\left(2\pi f \cdot \frac{2R}{c}\right)\right]\,df
$$

- 近距（$R\to 0$）：$\sigma_\phi^2 \to 0$
- 远距或散射功率不平衡：SNR 退化，**强近端目标掩盖弱远端目标**

### 1.2 设计启示

| 措施 | 效果 |
|---|---|
| 提高 LO 内环带宽 | 降低 1/f 段噪声 |
| 减小 Chirp 斜率 | 减小相位噪声 → 中频噪声的转换增益 |
| 多 Chirp 积累 | 非相关部分开平方抑制 |
| 发射功率管理 | 避免近端饱和 |

---

## 🔁 2. 发射泄漏与对消

!!! warning "汽车雷达痛点"
    单板收发天线距离仅几 mm，TX 直达 RX 的 **泄漏信号** 可比最强目标回波大 80 dB 以上，落在零距离附近，遮蔽近场目标并抬升整体底噪。

**缓解手段**：

1. **硬件层**：极化隔离、保护环、阻抗匹配
2. **算法层**：
    - 零距离 bin 估计泄漏复振幅 → 从快时间域减去
    - 自适应对消（LMS / RLS）：用参考路径持续估计泄漏
    - 背景减除（Background Subtraction）：静止场景平均后从每帧减掉
3. **参数层**：调整 Chirp 起始频率偏置，将直达成分移出 ADC 通带

---

## 🌫 3. 杂波抑制

### 3.1 MTI / MTD

- **MTI（Moving Target Indication）**：脉冲对消器 $H(z) = 1 - z^{-1}$（双延迟对消 $1 - 2z^{-1} + z^{-2}$），抑制零多普勒杂波。
- **MTD（Moving Target Detection）**：多普勒滤波器组（窄带），等价于 Doppler-FFT。

### 3.2 STAP（空时自适应处理）

在慢时间（Chirp） × 空间（阵元）联合域构建协方差，求解：

$$
\mathbf{w}_{\text{STAP}} = \mathbf{R}^{-1}_{\text{clutter+noise}} \mathbf{s}(\theta, f_d)
$$

适用于 **角度-多普勒耦合** 的地杂波（机载/车载雷达）。代价是训练样本大、计算复杂度高，工程中常用 **降维 STAP**（如 EFA、JDL）。

---

## 📏 4. 非线性 Chirp 校准

理想 Chirp 频率 $f(t) = f_0 + S\cdot t$，实际 PLL 带宽受限会产生 **频率非线性误差** $\Delta f(t)$，使 Range-FFT 峰展宽、旁瓣抬升。

**常用补偿流程**：

1. 用光纤延迟线 / 片上 TDC 测量实际 $f(t)$
2. 多项式拟合 $\Delta f(t)$
3. 对 ADC 数据做 **非均匀重采样** 或相位共轭乘法：$s'(t) = s(t)\cdot e^{-j2\pi\int \Delta f(t)\,dt}$

TI 在 `mmWave Studio` 中提供自动校准向导，IWR1443 片上已内置硬件校准模块。

---

## ☁ 5. 点云生成

Range-Doppler-Angle 检测后形成稀疏点集。每个检测点包含：

| 字段 | 说明 |
|---|---|
| $r$ | 斜距 (m) |
| $v_r$ | 径向速度 (m/s) |
| $\theta,\ \varphi$ | 方位角 / 俯仰角（若 2D-MIMO） |
| SNR | 检测信噪比 |
| RCS est. | 由雷达方程反推（可选） |

**笛卡尔坐标转换**：

$$
\begin{cases}
x = r \cos\varphi \sin\theta \\
y = r \cos\varphi \cos\theta \\
z = r \sin\varphi
\end{cases}
$$

**后处理链**：去地杂波 → DBSCAN 聚类 → 目标级属性估计 → MOT（多目标跟踪）。

---

## 🕺 6. 微多普勒

刚体运动提供 **主多普勒** $f_d$，非刚体部件（行人腿摆、旋翼、轮胎）产生 **调制边带**，在短时傅里叶（STFT）谱图上呈现特征纹路。

应用：行人 / 车辆 / 无人机分类、手势识别、生命体征监测。

```python
import numpy as np
from scipy.signal import stft

def micro_doppler_spectrogram(slow_time_iq, fs_chirp, nperseg=64, noverlap=56):
    f, t, Z = stft(slow_time_iq, fs=fs_chirp, nperseg=nperseg,
                   noverlap=noverlap, return_onesided=False)
    f = np.fft.fftshift(f)
    Z = np.fft.fftshift(Z, axes=0)
    return t, f, 20 * np.log10(np.abs(Z) + 1e-6)
```

---

## ⏱ 7. 实时性约束

IWR1443 一帧 50 ms 处理预算粗分：

| 阶段 | 耗时占比 | 常用加速 |
|---|---|---|
| Range-FFT | ~25% | HWA（硬件加速器）|
| Doppler-FFT | ~25% | HWA |
| CFAR | ~15% | HWA |
| DOA / MUSIC | ~20% | DSP C674x |
| 聚类 + 跟踪 | ~10% | ARM Cortex-R4F |
| 串口/CAN 输出 | ~5% | DMA |

!!! tip "工程经验"
    - 算法复杂度随 **目标数** 增长 → 加入 **检测点数量上限** 与 **SNR 剔除**
    - 使用 **HWA LUT** 做 CFAR 窗，避免重复 DMA
    - DOA 仅对 CFAR 通过的点做 MUSIC，而非全 Range-Doppler bin

---

## 📚 延伸阅读

- **IEEE Aerospace and Electronic Systems Magazine** — STAP 专题
- **TI SWRA553**: *Programming Chirp Parameters in TI Radar Devices*
- **TI SWRA662**: *Phase Noise Analysis in FMCW Radar*
- V. C. Chen, *The Micro-Doppler Effect in Radar*, Artech House, 2019.
- [MIMO 与 DOA 估计](mimo-doa.md)
