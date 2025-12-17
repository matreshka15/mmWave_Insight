# FMCW 调制

调频连续波（Frequency Modulated Continuous Wave, FMCW）是毫米波雷达最常用的工作模式，它通过发射频率随时间线性变化的连续波信号来实现目标探测。

## FMCW 基本原理

### 工作机制

FMCW 雷达发射一个频率随时间线性变化的信号（称为 chirp），接收目标反射回来的回波信号，通过测量发射信号和接收信号之间的频率差（拍频）来确定目标的距离和速度。

```mermaid
graph TD
    A[发射 Chirp 信号] --> B[目标反射]
    B --> C[接收回波]
    C --> D[混频器]
    A --> D
    D --> E[拍频信号]
    E --> F[FFT 处理]
    F --> G[距离/速度信息]
```

### Chirp 信号

线性调频信号的瞬时频率为：

$$
f(t) = f_0 + S \cdot t
$$

其中：

- $f_0$ 是起始频率
- $S = B/T_c$ 是调频斜率（chirp rate）
- $B$ 是调频带宽
- $T_c$ 是 chirp 持续时间

完整的发射信号为：

$$
s_t(t) = A_t \cos\left[2\pi\left(f_0 t + \frac{S t^2}{2}\right) + \phi_0\right]
$$

**FMCW Chirp 信号的频率-时间关系**：

![FMCW 频率波形](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/FMCW_Fwave.png)

*图：FMCW 信号的频率随时间线性变化*

## 距离测量

### 原理

目标距离为 $R$ 时，回波信号相对于发射信号有一个时间延迟：

$$
\tau = \frac{2R}{c}
$$

接收信号为：

$$
s_r(t) = A_r \cos\left[2\pi\left(f_0 (t-\tau) + \frac{S (t-\tau)^2}{2}\right) + \phi_0\right]
$$

### 拍频信号

**FMCW 测距原理**：

![FMCW 测距原理](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/FMCW.png)

*图：发射信号（蓝色）和接收信号（红色）之间的频率差即为拍频*

发射信号与接收信号混频后得到拍频信号：

$$
f_{beat} = |f_t(t) - f_r(t)| = S \tau = \frac{2SR}{c}
$$

因此，目标距离可以由拍频确定：

$$
\boxed{R = \frac{c \cdot f_{beat}}{2S} = \frac{c \cdot f_{beat} \cdot T_c}{2B}}
$$

### 距离分辨率

两个目标可分辨的最小距离差由信号带宽决定：

$$
\boxed{\Delta R = \frac{c}{2B}}
$$

!!! example "示例"
    对于带宽 $B = 4$ GHz 的雷达：
    
    $$
    \Delta R = \frac{3 \times 10^8}{2 \times 4 \times 10^9} = 0.0375 \text{ m} = 3.75 \text{ cm}
    $$

### 最大探测距离

由采样定理，最大不模糊距离取决于采样率：

$$
R_{max} = \frac{c \cdot f_s \cdot T_c}{4B}
$$

其中 $f_s$ 是 ADC 采样率。

或者用另一种形式：

$$
R_{max} = \frac{c}{2 \cdot \Delta f}
$$

其中 $\Delta f = B/N_{samples}$ 是频率分辨率。

## 速度测量

### 多普勒效应的影响

当目标有径向速度 $v_r$ 时，会产生多普勒频移：

$$
f_d = \frac{2v_r}{\lambda} = \frac{2v_r f_0}{c}
$$

这会导致拍频发生偏移。

### 单 Chirp 的局限

单个 chirp 无法区分距离和速度引起的拍频变化，因为：

$$
f_{beat} = f_R + f_d
$$

其中 $f_R$ 是距离分量，$f_d$ 是多普勒分量。

### 解决方案：多 Chirp 处理

发射多个连续的 chirp，形成一个帧（frame）：

![Frame 结构](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/defineaframe.png)

*图：一个 Frame 由多个 Chirp 组成，用于多普勒分析*

每个 Frame 包含多个 Chirp，通过对每个 Chirp 的同一距离 bin 进行 FFT 可以提取速度信息。

## 三角波调制

### 上扫频和下扫频

使用三角波调制（up-chirp 和 down-chirp）：

![三角波 FMCW](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/speedmes.png)

*图：三角波调制的 FMCW 信号用于同时测距和测速*

通过上扫频和下扫频的拍频差异可以解耦距离和速度信息。

### 距离和速度解耦

**上扫频（Up-chirp）**：
$$
f_{beat,up} = f_R + f_d
$$

**下扫频（Down-chirp）**：
$$
f_{beat,down} = f_R - f_d
$$

求和消除多普勒分量：
$$
f_R = \frac{f_{beat,up} + f_{beat,down}}{2}
$$

求差得到多普勒分量：
$$
f_d = \frac{f_{beat,up} - f_{beat,down}}{2}
$$

从而得到：

$$
\boxed{R = \frac{c \cdot f_R \cdot T_c}{2B}}
$$

$$
\boxed{v_r = \frac{\lambda \cdot f_d}{2}}
$$

## 2D-FFT 处理

### 数据立方体

FMCW 雷达采集的原始数据可以表示为三维数据立方体：

```
维度 1: 快时间（Fast-time）- 单个 chirp 内的采样点
维度 2: 慢时间（Slow-time）- 多个 chirp 之间
维度 3: 通道（Channel）- 多个接收天线
```

### 第一次 FFT：Range FFT

对每个 chirp 的快时间采样进行 FFT，得到距离信息：

$$
S_R(k, m) = \sum_{n=0}^{N-1} s(n, m) \cdot e^{-j2\pi kn/N}
$$

其中：

- $n$ 是快时间采样索引
- $m$ 是 chirp 索引
- $k$ 是距离 bin

结果：**Range Profile**（距离剖面）

### 第二次 FFT：Doppler FFT

对每个距离 bin 的慢时间序列进行 FFT，得到速度信息：

$$
S_{RD}(k, l) = \sum_{m=0}^{M-1} S_R(k, m) \cdot e^{-j2\pi lm/M}
$$

其中：

- $m$ 是 chirp 索引
- $l$ 是速度 bin

结果：**Range-Doppler Map**（距离-多普勒图）

![角度 FFT 处理](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/angleFFT.png)

*图：多维 FFT 处理流程，包括距离、速度和角度维度*

### 处理流程

```mermaid
graph LR
    A[ADC 数据<br/>N × M] --> B[Range FFT<br/>沿快时间]
    B --> C[Range Profile<br/>N × M]
    C --> D[Doppler FFT<br/>沿慢时间]
    D --> E[Range-Doppler Map<br/>N × M]
    E --> F[CFAR 检测]
    F --> G[目标列表]
```

## FMCW 雷达参数设计

### 关键参数

| 参数 | 符号 | 影响 |
|------|------|------|
| 中心频率 | $f_0$ | 波长、天线尺寸、分辨率 |
| 带宽 | $B$ | 距离分辨率 |
| Chirp 时间 | $T_c$ | 最大距离、采样率要求 |
| Chirp 数量 | $N_c$ | 速度分辨率、帧率 |
| 帧时间 | $T_f$ | 速度分辨率、更新率 |
| 采样率 | $f_s$ | 最大距离、ADC 要求 |

### 距离相关参数

**距离分辨率**：
$$
\Delta R = \frac{c}{2B}
$$

**最大距离**：
$$
R_{max} = \frac{c \cdot f_s \cdot T_c}{4B}
$$

**距离 bin 数量**：
$$
N_{range} = \frac{2B \cdot R_{max}}{c} = \frac{f_s \cdot T_c}{2}
$$

### 速度相关参数

**速度分辨率**：
$$
\Delta v = \frac{\lambda}{2T_f} = \frac{\lambda}{2N_c T_c}
$$

**最大速度**（不模糊）：
$$
v_{max} = \frac{\lambda}{4T_c}
$$

**速度 bin 数量**：
$$
N_{velocity} = N_c
$$

### 设计权衡

1. **距离与采样率**
   - 更大的 $R_{max}$ 需要更高的 $f_s$
   - ADC 性能和成本限制

2. **速度与帧率**
   - 更大的 $v_{max}$ 需要更短的 $T_c$
   - 更好的速度分辨率需要更长的 $T_f$（更多 chirp）

3. **带宽与功耗**
   - 更大的 $B$ 提供更好的距离分辨率
   - 但增加功耗和复杂度

## FMCW 雷达的优势

### 1. 低峰值功率

- 连续发射，平均功率等于峰值功率
- 功放设计简单，成本低
- 适合集成电路实现

### 2. 同时测距测速

- 通过 2D-FFT 同时获得距离和速度
- 无需额外的测量周期

### 3. 高距离分辨率

- 大带宽易于实现（毫米波）
- 可达厘米级甚至毫米级分辨率

### 4. 低截获概率

- 信号能量分散在时间和频率上
- 难以被截获和干扰

### 5. 抗干扰能力

- 窄带干扰只影响部分频率
- 可通过信号处理抑制

## FMCW 雷达的挑战

### 1. 频率非线性

**问题**：实际 chirp 的频率并非完全线性

**影响**：

- 距离旁瓣升高
- 分辨率下降
- 虚假目标

**解决方案**：

- 高精度频率源（PLL）
- 频率校准和补偿
- 非线性校正算法

### 2. 发射泄漏

**问题**：发射信号直接泄漏到接收通道

**影响**：

- 饱和接收机
- 近距离盲区
- 动态范围降低

**解决方案**：

- 收发隔离设计
- 自适应对消
- 数字域补偿

### 3. 相位噪声

**问题**：本振相位噪声

**影响**：

- 距离和速度测量误差
- 弱目标被噪声淹没

**解决方案**：

- 高质量振荡器
- 相位噪声补偿算法

### 4. 多径效应

**问题**：信号经多条路径到达目标

**影响**：

- 虚假目标
- 测量误差

**解决方案**：

- 波束形成
- 多径抑制算法
- MIMO 技术

## 实际应用示例

### 示例 1：汽车雷达参数

**需求**：

- 探测距离：0.5 ~ 200 m
- 距离分辨率：< 5 cm
- 速度范围：-100 ~ +100 km/h
- 速度分辨率：< 0.5 km/h

**参数设计**：

1. **距离分辨率**确定带宽：
   $$B \geq \frac{c}{2\Delta R} = \frac{3 \times 10^8}{2 \times 0.05} = 3 \text{ GHz}$$
   选择 $B = 4$ GHz

2. **最大距离**确定采样率（假设 $T_c = 50$ μs）：
   $$f_s \geq \frac{4B R_{max}}{c T_c} = \frac{4 \times 4 \times 10^9 \times 200}{3 \times 10^8 \times 50 \times 10^{-6}} = 213.3 \text{ MHz}$$
   选择 $f_s = 250$ MHz

3. **速度分辨率**确定帧时间（$\lambda = 3.9$ mm）：
   $$T_f \geq \frac{\lambda}{2\Delta v} = \frac{0.0039}{2 \times 0.14} = 14 \text{ ms}$$
   选择 $T_f = 50$ ms（对应帧率 20 Hz）

4. **Chirp 数量**：
   $$N_c = \frac{T_f}{T_c} = \frac{50 \times 10^{-3}}{50 \times 10^{-6}} = 1000$$

### 示例 2：77 GHz 雷达配置

| 参数 | 值 |
|------|-----|
| 中心频率 | 77 GHz |
| 带宽 | 4 GHz |
| Chirp 时间 | 50 μs |
| Chirp 数量 | 128 |
| 帧时间 | 40 ms |
| 采样率 | 10 MHz |
| 采样点数 | 512 |

**性能**：

- 距离分辨率：3.75 cm
- 最大距离：191 m
- 速度分辨率：0.49 km/h
- 最大速度：±98 km/h

## TI mmWave SDK 中的 FMCW

### Chirp 配置

```c
// Chirp 参数配置
rlProfileCfg_t profileCfg = {
    .profileId = 0,
    .startFreq = 77.0,        // GHz
    .idleTime = 5.0,          // μs
    .adcStartTime = 6.0,      // μs
    .rampEndTime = 50.0,      // μs
    .txOutPower = 0,          // dB
    .txPhaseShifter = 0,      // degrees
    .freqSlopeConst = 80.0,   // MHz/μs
    .txStartTime = 0,         // μs
    .numAdcSamples = 512,
    .digOutSampleRate = 10000,// ksps
    .hpfCornerFreq1 = 0,
    .hpfCornerFreq2 = 0,
    .rxGain = 30              // dB
};
```

### Frame 配置

```c
// Frame 参数配置
rlFrameCfg_t frameCfg = {
    .chirpStartIdx = 0,
    .chirpEndIdx = 127,
    .numLoops = 1,
    .numFrames = 0,           // 连续模式
    .framePeriodicity = 40,   // ms
    .triggerSelect = 1,       // SW trigger
    .frameTriggerDelay = 0    // μs
};
```

---

## 下一步

- [信号处理](signal-processing.md) - 深入 FMCW 信号处理算法
- [目标检测](target-detection.md) - 了解 CFAR 检测方法
- [IWR1443 硬件](../iwr1443/hardware.md) - 学习 TI 雷达平台

## 参考资料

1. Rohling, H. (2014). "Radar CFAR Thresholding in Clutter and Multiple Target Situations". *IEEE Transactions on Aerospace and Electronic Systems*.
2. Texas Instruments. (2017). *mmWave Radar Sensors*. Application Report.
3. Patole, S. M., et al. (2017). "Automotive Radars: A Review of Signal Processing Techniques". *IEEE Signal Processing Magazine*.
