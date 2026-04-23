# 术语表

本页汇总本站常用术语的中英对照与简要解释，便于检索。鼠标悬停文中出现的带点下划线词语可显示简要解释（启用 `abbr` 扩展）。

## A

*[ADC]: Analog-to-Digital Converter 模数转换器
*[AoA]: Angle of Arrival 到达角
*[AWR]: TI 汽车毫米波雷达芯片系列（Automotive）

- **ADC**（Analog-to-Digital Converter，模数转换器）：将中频信号数字化，采样率决定最大无模糊中频带宽 → 最大测量距离。
- **AoA**（Angle of Arrival，到达角）：目标回波到达阵列的方位角/俯仰角。
- **AWR**：TI 面向汽车应用的 77 GHz 雷达 SoC 系列（与 IWR 工业系列同构，认证不同）。

## B

*[BPM]: Binary Phase Modulation 二进制相位调制
*[BW]: Bandwidth 带宽

- **Beamforming**（波束形成）：通过对阵元加权求和实现空间滤波。
- **BPM-MIMO**：采用二进制相位码正交化多 TX 的 MIMO 方案。

## C

*[CFAR]: Constant False Alarm Rate 恒虚警率
*[Chirp]: 线性调频脉冲

- **CA-CFAR**（Cell Averaging CFAR）：均值 CFAR，适用于均匀噪声背景。
- **Capon**：即 MVDR，最小方差无失真响应波束形成。
- **Chirp**：频率随时间线性变化的正弦信号，FMCW 的核心信号形式。
- **Clutter**（杂波）：来自非感兴趣目标的回波（地面、建筑、雨雪）。

## D

*[DBSCAN]: Density-Based Spatial Clustering of Applications with Noise
*[DOA]: Direction of Arrival 来波方向
*[DDMA]: Doppler-Division Multiple Access 多普勒分频多址

- **DOA**：来波方向估计，汽车雷达常指方位角。
- **DDMA-MIMO**：在多普勒域正交化 TX 的 MIMO 方案。
- **Doppler Shift**（多普勒频移）：$f_d = 2v_r/\lambda$。

## E

- **ESPRIT**：Estimation of Signal Parameters via Rotational Invariance Techniques，基于旋转不变性的子空间 DOA 算法。
- **EIRP**（有效全向辐射功率）：$P_t G_t$。

## F

*[FMCW]: Frequency Modulated Continuous Wave 调频连续波
*[FFT]: Fast Fourier Transform 快速傅里叶变换

- **FMCW**：调频连续波，毫米波雷达主流工作模式。
- **Frame**（帧）：一组 Chirp 构成的处理单元。

## I

- **IF**（Intermediate Frequency，中频）：dechirp 之后的拍频信号。
- **IWR**：TI 面向工业的毫米波雷达 SoC 系列。

## M

*[MIMO]: Multiple Input Multiple Output
*[MUSIC]: MUltiple SIgnal Classification
*[MVDR]: Minimum Variance Distortionless Response

- **MIMO 雷达**：多发多收雷达，通过正交波形构造虚拟阵列提升角度分辨率。
- **MUSIC**：基于噪声子空间正交性的超分辨率 DOA 算法。
- **Micro-Doppler**：目标次级运动（如行人腿摆）引起的多普勒调制。
- **MTI**（Moving Target Indication）：对消静止杂波的滤波技术。

## P

- **PRF**（Pulse Repetition Frequency，脉冲/Chirp 重复频率）：决定最大无模糊速度。
- **PRI**（Pulse Repetition Interval）：PRF 的倒数。
- **Phase Noise**（相位噪声）：LO 频谱随机抖动，限制远距目标 SNR。

## R

*[RCS]: Radar Cross Section 雷达散射截面
*[RDM]: Range-Doppler Map

- **RCS**：目标反射能力的等效面积（m²）。
- **Range Bin**：Range-FFT 后每个频点对应的距离单元。
- **RDM**（Range-Doppler Map）：距离-多普勒二维谱。

## S

- **SNR**（Signal-to-Noise Ratio，信噪比）。
- **SDK**：Software Development Kit。TI mmWave SDK 提供雷达驱动与示例。
- **STAP**：空时自适应处理，联合空间 + 慢时间抑制杂波。

## T

*[TDM]: Time-Division Multiplexing

- **TDM-MIMO**：发射天线按时间轮流发射的 MIMO 方案（最常用）。
- **TI**：德州仪器（Texas Instruments）。

## V

- **Virtual Array**（虚拟阵列）：$N_\text{TX} \cdot N_\text{RX}$ 个等效阵元构成的阵列。

## W

- **Window Function**（窗函数）：抑制频谱泄漏的加权序列，如汉宁、汉明、布莱克曼。
