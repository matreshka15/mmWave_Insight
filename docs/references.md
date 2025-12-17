# 参考资料

本页收集了毫米波雷达学习和开发的相关资源，包括教材、论文、在线课程和开发工具。

## 📚 经典教材

### 雷达基础

1. **Skolnik, M. I. (2008).** *Radar Handbook* (3rd ed.). McGraw-Hill.
   - 雷达领域的经典参考书
   - 涵盖雷达系统的各个方面
   - 适合工程师和研究人员

2. **Richards, M. A. (2014).** *Fundamentals of Radar Signal Processing* (2nd ed.). McGraw-Hill.
   - 专注于信号处理
   - 包含 MATLAB 示例代码
   - 深入讲解 FFT、CFAR 等算法

3. **Mahafza, B. R. (2013).** *Radar Systems Analysis and Design Using MATLAB* (3rd ed.). CRC Press.
   - 结合理论和实践
   - 丰富的 MATLAB 代码
   - 适合自学

4. **张光义，赵玉洁 (2017).** *雷达原理*. 国防工业出版社.
   - 国内经典教材
   - 系统完整
   - 中文资料

### 毫米波雷达

5. **Hasch, J., et al. (2012).** "Millimeter-wave technology for automotive radar sensors in the 77 GHz frequency band." *IEEE Transactions on Microwave Theory and Techniques*, 60(3), 845-860.
   - 汽车雷达技术综述
   - 77 GHz 频段特性
   - 实际应用案例

6. **Patole, S. M., et al. (2017).** "Automotive radars: A review of signal processing techniques." *IEEE Signal Processing Magazine*, 34(2), 22-35.
   - 信号处理技术综述
   - FMCW 雷达详解
   - 目标检测和跟踪

### 阵列信号处理

7. **Van Trees, H. L. (2002).** *Optimum Array Processing*. Wiley-Interscience.
   - 阵列信号处理经典
   - 波束形成理论
   - DOA 估计算法

8. **Stoica, P., & Moses, R. (2005).** *Spectral Analysis of Signals*. Pearson.
   - 频谱估计理论
   - 参数估计方法
   - MUSIC、ESPRIT 算法

## 📝 重要论文

### FMCW 雷达

1. Rohling, H. (1983). "Radar CFAR Thresholding in Clutter and Multiple Target Situations." *IEEE Transactions on Aerospace and Electronic Systems*.

2. Stove, A. G. (1992). "Linear FMCW radar techniques." *IEE Proceedings F-Radar and Signal Processing*.

3. Pfeffer, C., et al. (2013). "A FMCW MIMO Radar System for Frequency-Division Multiple TX-Beamforming." *IEEE Transactions on Microwave Theory and Techniques*.

### 目标检测

4. Finn, H. M., & Johnson, R. S. (1968). "Adaptive detection mode with threshold control as a function of spatially sampled clutter-level estimates." *RCA Review*.

5. Gandhi, P. P., & Kassam, S. A. (1988). "Analysis of CFAR processors in nonhomogeneous background." *IEEE Transactions on Aerospace and Electronic Systems*.

### 微多普勒

6. Chen, V. C. (2011). "The Micro-Doppler Effect in Radar." *Artech House*.

7. Kim, Y., & Ling, H. (2009). "Human activity classification based on micro-Doppler signatures using a support vector machine." *IEEE Transactions on Geoscience and Remote Sensing*.

## 🎓 在线课程

### TI 官方培训

1. **mmWave Training Series**
   - 网址：[https://training.ti.com/](https://training.ti.com/)
   - 内容：从基础到高级的完整课程
   - 语言：英文
   - 免费

2. **TI Precision Labs - Radar**
   - 系列短视频
   - 涵盖各个技术细节
   - 配有 PPT 和测验

### Coursera / edX

3. **Automotive Radar Systems**
   - 平台：Coursera
   - 大学：多所欧洲大学
   - 内容：汽车雷达系统设计

4. **Sensor Fusion and Non-linear Filtering for Automotive Systems**
   - 平台：edX
   - 大学：Chalmers University
   - 内容：传感器融合

### YouTube 频道

5. **TI Training**
   - 频道：Texas Instruments Training
   - 内容：产品培训、应用笔记

6. **IEEE Radar Conference Lectures**
   - 会议录像
   - 最新研究成果

## 🛠️ 开发工具和资源

### TI 官方资源

1. **mmWave SDK**
   - 下载：[TI mmWave SDK](https://www.ti.com/tool/MMWAVE-SDK)
   - 包含：驱动、API、示例、文档

2. **mmWave Industrial Toolbox**
   - 下载：[Industrial Toolbox](https://www.ti.com/tool/MMWAVE-INDUSTRIAL-TOOLBOX)
   - 内容：工业应用参考设计

3. **TI E2E 论坛**
   - 网址：[https://e2e.ti.com/](https://e2e.ti.com/)
   - 技术支持和社区讨论

### 开源项目

4. **OpenRadar**
   - GitHub：[PreSenseRadar/OpenRadar](https://github.com/PreSenseRadar/OpenRadar)
   - Python 雷达数据处理库
   - 支持多种 TI 雷达

5. **mmWave-Demo-Visualizer-Python**
   - Python 版可视化工具
   - 实时显示雷达数据

6. **pymmw**
   - Python 接口库
   - 配置和数据读取

### MATLAB 工具箱

7. **Phased Array System Toolbox**
   - 官方工具箱
   - 雷达系统仿真
   - 信号处理算法

8. **Radar Toolbox**
   - 雷达场景仿真
   - 波形设计
   - 目标检测

## 📄 技术文档

### TI 应用笔记

1. **mmWave Radar Device and Carrier Board Design Guide**
   - 文档编号：SWRA554
   - PCB 设计指南

2. **Programming Chirp Parameters in TI Radar Devices**
   - 文档编号：SWRA553
   - Chirp 配置详解

3. **Antenna Design Guide for mmWave Radar Sensors**
   - 文档编号：SWRA581
   - 天线设计

4. **Range-Doppler Processing**
   - 文档编号：SWRA553
   - 2D-FFT 处理

5. **CFAR Detection Algorithms**
   - 文档编号：SWRA554
   - CFAR 算法实现

### IEEE 标准

6. **IEEE Std 521-2019**
   - Standard Letter Designations for Radar-Frequency Bands
   - 雷达频段标准

7. **ISO 26262**
   - Road vehicles - Functional safety
   - 汽车功能安全

## 🌐 专业网站

### 学术机构

1. **IEEE Radar Systems Panel**
   - 网址：[https://www.ieee-aps.org/](https://www.ieee-aps.org/)
   - 雷达领域的学术组织

2. **MIT Lincoln Laboratory**
   - 雷达研究和开发
   - 技术报告和论文

### 行业组织

3. **Automotive Radar Consortium**
   - 汽车雷达行业标准
   - 技术白皮书

4. **ETSI (European Telecommunications Standards Institute)**
   - 欧洲标准制定
   - 频谱分配

## 📊 数据集

### 公开数据集

1. **nuScenes Dataset**
   - 网址：[https://www.nuscenes.org/](https://www.nuscenes.org/)
   - 自动驾驶数据集
   - 包含雷达数据

2. **RadarScenes**
   - 网址：[https://radar-scenes.com/](https://radar-scenes.com/)
   - 汽车雷达数据集
   - 多种场景

3. **CARRADA**
   - RAw Automotive Dataset in Adverse weather
   - 恶劣天气条件下的雷达数据

## 💻 软件工具

### 仿真工具

1. **SystemVue**
   - 公司：Keysight
   - 雷达系统仿真

2. **AWR Design Environment**
   - 公司：Cadence
   - 高频电路设计

3. **CST Microwave Studio**
   - 公司：Dassault Systèmes
   - 电磁仿真

### 数据分析

4. **MATLAB**
   - 信号处理和分析
   - 丰富的工具箱

5. **Python 科学计算栈**
   - NumPy、SciPy：数值计算
   - Matplotlib：可视化
   - scikit-learn：机器学习

## 📱 移动应用

1. **TI mmWave Demo Visualizer**
   - 平台：Android
   - 实时可视化雷达数据

## 🎯 实践项目

### 入门项目

1. **人体检测**
   - 检测房间内的人员
   - 统计人数

2. **测速雷达**
   - 测量车辆速度
   - 显示速度值

3. **手势识别**
   - 识别简单手势
   - 控制设备

### 进阶项目

4. **自动泊车辅助**
   - 检测障碍物
   - 引导泊车

5. **生命体征监测**
   - 呼吸和心跳检测
   - 健康监测应用

6. **无人机检测**
   - 识别飞行目标
   - 跟踪轨迹

## 📈 行业报告

1. **Yole Développement: Automotive and Industrial Radar Report**
   - 市场分析和预测
   - 技术趋势

2. **McKinsey: Autonomous Driving Technology**
   - 自动驾驶技术报告
   - 传感器融合

## 🔗 相关链接

### 原始项目

- **matreshka15/mmwave_radar_learning_notebook**
  - GitHub：[https://github.com/matreshka15/mmwave_radar_learning_notebook](https://github.com/matreshka15/mmwave_radar_learning_notebook)
  - 本网站内容基于此 LaTeX 笔记整理

### 社区和论坛

- **Reddit: r/radar**
  - 雷达技术讨论

- **Stack Exchange: Signal Processing**
  - 信号处理问答

- **知乎：毫米波雷达话题**
  - 中文技术讨论

## 📧 联系方式

如有建议或发现错误，欢迎：

- 在 [GitHub](https://github.com/matreshka15/mmwave_radar_learning_notebook) 提交 Issue
- 发起 Pull Request
- 参与社区讨论

---

## 持续更新

本页面会持续更新最新的学习资源和开发工具，欢迎收藏并定期查看。

最后更新：2025年12月
