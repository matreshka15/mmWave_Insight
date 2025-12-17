# 图片资源说明

本文档列出了网站中使用的图片资源及其来源。

## 图片来源

所有图片均来自原始项目：[matreshka15/mmwave_radar_learning_notebook](https://github.com/matreshka15/mmwave_radar_learning_notebook)

图片存储在该项目的 `pic/` 目录下。

## 已添加的图片

### FMCW 调制 (fmcw.md)

1. **FMCW_Fwave.png**
   - 位置：FMCW Chirp 信号部分
   - 说明：FMCW 信号的频率随时间线性变化
   - 链接：`https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/FMCW_Fwave.png`

2. **FMCW.png**
   - 位置：拍频信号部分
   - 说明：发射信号和接收信号之间的频率差（测距原理）
   - 链接：`https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/FMCW.png`

3. **speedmes.png**
   - 位置：三角波调制部分
   - 说明：三角波调制用于同时测距和测速
   - 链接：`https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/speedmes.png`

4. **defineaframe.png**
   - 位置：Frame 配置部分
   - 说明：一个 Frame 由多个 Chirp 组成
   - 链接：`https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/defineaframe.png`

### 信号处理 (signal-processing.md)

5. **twoRX.png**
   - 位置：多天线系统部分
   - 说明：双接收天线系统的相位差示意图
   - 链接：`https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/twoRX.png`

6. **angleest.png**
   - 位置：相位差测角部分
   - 说明：通过多天线的相位差进行角度估计
   - 链接：`https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/angleest.png`

7. **deltaphase.png**
   - 位置：相位处理部分
   - 说明：不同接收天线之间的相位差
   - 链接：`https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/deltaphase.png`

### 雷达基础 (radar-basics/overview.md)

8. **TXRX.png**
   - 位置：基本原理部分
   - 说明：雷达的发射和接收基本原理
   - 链接：`https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/TXRX.png`

## 原项目中的其他可用图片

以下图片可在将来添加到相应页面：

### 信号分析类

- **phaseOfIF.png** - 中频信号的相位
- **phaseplustau.png** - 相位加延迟
- **IFsensitivity.png** - 中频灵敏度分析
- **sensitivety.png** - 系统灵敏度
- **thetasens.png** - 角度灵敏度

### 角度估计类

- **angleestimate.png** - 角度估计方法
- **angleFFT.png** - 角度 FFT 处理
- **analysis.png** - 信号分析

### Frame 和配置类

- **diffframe.png** - 不同 Frame 配置
- **sametwo.png** - 相同配置对比

### 问题和冲突类

- **problem_1.png** - 问题示例 1
- **problem_2.png** - 问题示例 2
- **sdconflicts.png** - 速度距离冲突

### 系统性能类

- **POWER.png** - 功率分析
- **result.png** - 结果分析

## 图片使用说明

### 在 Markdown 中引用图片

使用以下格式在文档中添加图片：

```markdown
![图片描述](https://raw.githubusercontent.com/matreshka15/mmwave_radar_learning_notebook/master/pic/图片文件名.png)

*图：详细说明文字*
```

### 图片缓存

GitHub 的 raw 链接会自动缓存，确保加载速度。如果图片无法显示：

1. 检查 GitHub 仓库是否公开
2. 检查图片文件名是否正确
3. 尝试直接在浏览器中打开链接测试

### 本地图片

如需使用本地图片，请将图片文件放入 `docs/images/` 目录，然后使用相对路径引用：

```markdown
![图片描述](../images/your-image.png)
```

## 图片版权

所有图片版权归原作者所有。本项目仅用于教育和学习目的。

## 未来改进

可以考虑的图片增强：

1. **添加更多示意图**
   - 系统框图
   - 算法流程图
   - 性能对比图

2. **创建交互式图表**
   - 使用 Plotly 或 D3.js
   - 动态参数调整
   - 实时可视化

3. **录制视频教程**
   - 嵌入 YouTube 视频
   - 演示实际操作
   - 讲解关键概念

4. **3D 可视化**
   - Range-Doppler-Angle 立体图
   - 天线方向图
   - 波束形成动画

## 贡献图片

如果你有更好的示意图或可视化，欢迎贡献：

1. 将图片放入 `docs/images/` 目录
2. 在相应的 Markdown 文件中添加引用
3. 更新本文档
4. 提交 Pull Request

---

最后更新：2025年12月17日
