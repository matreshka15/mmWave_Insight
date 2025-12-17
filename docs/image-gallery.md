# 图片库

本页面展示网站中使用的所有技术图示和说明图。

## FMCW 雷达原理

### 频率时间关系

![FMCW 频率波形](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/FMCW_Fwave.png)

**说明**：FMCW 信号的频率随时间线性变化，形成 Chirp 信号。

---

### 测距原理

![FMCW 测距原理](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/FMCW.png)

**说明**：发射信号（蓝色）和接收信号（红色）之间的频率差即为拍频，用于计算距离。

---

### 三角波调制

![三角波 FMCW](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/speedmes.png)

**说明**：通过上扫频和下扫频可以同时测量距离和速度。

---

### Frame 结构

![Frame 结构](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/defineaframe.png)

**说明**：一个 Frame 由多个 Chirp 组成，用于多普勒频率分析。

---

## 信号处理

### 发射接收原理

![雷达发射接收](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/TXRX.png)

**说明**：雷达系统的基本发射和接收架构。

---

### 相位差

![相位差示意](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/deltaphase.png)

**说明**：不同接收天线之间的相位差，用于角度估计。

---

### 双天线系统

![双接收天线](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/twoRX.png)

**说明**：双接收天线系统的相位差分析原理。

---

### 角度估计

![角度估计原理](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/angleest.png)

**说明**：通过多天线阵列的相位差进行目标角度估计。

---

### 角度 FFT

![角度 FFT 处理](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/angleFFT.png)

**说明**：通过 FFT 在角度维度进行处理，获得目标的角度信息。

---

## 目标检测

### CFAR 分析

![CFAR 分析](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/analysis.png)

**说明**：CFAR 检测算法的窗口结构和噪声估计原理。

---

## 其他可用图片

以下图片来自原项目，可根据需要添加到相应章节：

### 相位分析

- [中频信号相位](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/phaseOfIF.png)
- [相位加延迟](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/phaseplustau.png)

### 灵敏度分析

- [中频灵敏度](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/IFsensitivity.png)
- [系统灵敏度](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/sensitivety.png)
- [角度灵敏度](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/thetasens.png)

### 角度估计

- [角度估计方法](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/angleestimate.png)

### Frame 配置

- [不同 Frame](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/diffframe.png)
- [相同配置](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/sametwo.png)

### 性能分析

- [功率分析](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/POWER.png)
- [结果分析](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/result.png)

### 问题示例

- [问题 1](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/problem_1.png)
- [问题 2](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/problem_2.png)
- [速度距离冲突](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/sdconflicts.png)

---

## 使用说明

### 在文档中引用图片

要在 Markdown 文档中添加这些图片，使用以下格式：

```markdown
![图片描述](图片URL)

*图：详细说明文字*
```

### 图片链接格式

所有图片使用 GitHub raw 链接：

```
https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/图片文件名.png
```

### 查看原始图片

点击上方任意图片可以在新标签页中查看完整大小的图片。

---

## 版权说明

所有图片版权归原作者 [matreshka15](https://github.com/matreshka15) 所有，来源于项目 [mmwave_radar_learning_notebook](https://github.com/matreshka15/mmwave_radar_learning_notebook)。

本网站仅用于教育和学习目的。
