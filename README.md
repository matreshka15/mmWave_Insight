<div align="center">

# 📡 mmWave Insight

### **mmWave Radar Insight | 毫米波雷达洞察**

*Deep Dive into mmWave Radar Technology | 深入毫米波雷达技术*

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Online-brightgreen)](https://matreshka15.github.io/mmWave_Insight/)
[![MkDocs](https://img.shields.io/badge/MkDocs-Material-blue)](https://squidfunk.github.io/mkdocs-material/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[📖 在线阅读](https://matreshka15.github.io/mmWave_Insight/) | [🚀 快速开始](#-快速开始) | [💡 贡献指南](#-如何贡献)

</div>

---

## 👋 欢迎

欢迎来到 **mmWave Insight**！这是一个专注于毫米波雷达技术的开源学习平台，旨在为工程师、研究人员和学生提供系统、深入的毫米波雷达知识。

无论你是雷达领域的新手，还是希望深化理解 FMCW 信号处理的工程师，本手册都将为你提供：

- 📚 **系统化的知识体系**：从基础原理到实际应用
- 🔬 **深入的技术讲解**：包含详细的数学推导和算法分析
- 💻 **实用的代码示例**：Python、MATLAB 实现参考
- 🎯 **TI IWR1443 实战**：硬件平台和开发指导
- 🖼️ **丰富的可视化**：技术图表和信号处理流程图

## 📖 手册内容

本手册内容涵盖毫米波雷达技术的核心知识领域：

### 🎯 第一部分：雷达基础

深入理解雷达的基本原理和核心概念：

- **[雷达概述](docs/radar-basics/overview.md)**：雷达的工作原理、分类与应用
- **[雷达方程](docs/radar-basics/radar-equation.md)**：雷达性能分析的数学基础
- **[多普勒效应](docs/radar-basics/doppler-effect.md)**：速度测量原理与应用

### 📡 第二部分：毫米波雷达技术

掌握 FMCW 毫米波雷达的核心技术：

- **[FMCW 调制](docs/mmwave/fmcw.md)**：调频连续波雷达原理
- **[信号处理](docs/mmwave/signal-processing.md)**：FFT、DOA、MUSIC 算法详解

### 🔧 第三部分：IWR1443 开发平台

TI IWR1443 芯片的硬件与开发实践：

- **[硬件介绍](docs/iwr1443/hardware.md)**：芯片架构与 MIMO 配置
- **[开发环境](docs/iwr1443/development.md)**：SDK、CCS、UniFlash 使用指南

### 📚 第四部分：学习资源

- **[参考资料](docs/references.md)**：经典教材、重要论文、在线课程
- **[图片库](docs/image-gallery.md)**：技术图表汇总

## 🚀 快速开始

### 本地预览

1. **安装依赖**

```bash
pip install mkdocs-material pymdown-extensions
```

2. **启动本地服务器**

```bash
mkdocs serve
```

3. **浏览网站**

打开浏览器访问：[http://127.0.0.1:8000](http://127.0.0.1:8000)

### 构建静态网站

```bash
mkdocs build
```

生成的静态文件位于 `site/` 目录。

## 📦 部署到 GitHub Pages

### 方法 1：使用 GitHub Actions（推荐）

1. **Fork 或上传本项目到你的 GitHub 仓库**

2. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择：GitHub Actions

3. **推送代码**

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

4. **自动部署**
   - GitHub Actions 会自动构建并部署
   - 几分钟后访问：`https://matreshka15.github.io/mmWave_Insight/`

### 方法 2：手动部署

```bash
mkdocs gh-deploy
```

## 🛠️ 项目结构

```
mmWave_Insight/
├── 📂 .github/
│   └── workflows/
│       └── deploy-docs.yml          # ⚙️ GitHub Actions 自动部署
├── 📚 docs/                         # 文档源文件目录
│   ├── 🏠 index.md                  # 主页
│   ├── 📊 javascripts/
│   │   └── mathjax.js             # 数学公式渲染
│   ├── 🎨 stylesheets/
│   │   └── extra.css              # 自定义样式
│   ├── 📡 radar-basics/            # 雷达基础章节
│   │   ├── overview.md             # 雷达原理概述
│   │   ├── radar-equation.md       # 雷达方程
│   │   └── doppler-effect.md       # 多普勒效应
│   ├── 🌊 mmwave/                  # 毫米波雷达章节
│   │   ├── fmcw.md                 # FMCW 调制
│   │   └── signal-processing.md    # 信号处理
│   ├── 🔧 iwr1443/                 # IWR1443 平台章节
│   │   ├── hardware.md             # 硬件介绍
│   │   └── development.md          # 开发环境
│   ├── 🖼️ image-gallery.md         # 图片库
│   └── 📚 references.md            # 参考资料
├── ⚙️ mkdocs.yml                   # MkDocs 配置文件
├── 📖 README.md                    # 项目说明文档
├── 🎨 BRAND_GUIDE.md               # 品牌设计指南
└── 🚀 DEPLOY.md                   # 部署指南
```

## ✨ 特性

<div class="grid" markdown>

| 特性 | 说明 |
|------|------|
| 📱 **响应式设计** | 完美支持桌面、平板、手机设备 |
| 🌓 **深色模式** | 一键切换浅色/深色主题，护眼舒适 |
| 🔍 **智能搜索** | 支持中英文全文搜索，快速定位内容 |
| 📐 **公式渲染** | MathJax 3.0 渲染 LaTeX 公式，专业优雅 |
| 💻 **代码高亮** | Python/MATLAB/C 语法高亮 + 一键复制 |
| 🖼️ **视觉优化** | 技术图表 + Mermaid 流程图，直观易懂 |
| 🎨 **Material 风格** | Google Material Design，现代化 UI |
| 🚀 **极速加载** | 静态网站生成，秒开无等待 |

</div>

## 🎨 自定义

### 修改主题颜色

编辑 `mkdocs.yml` 中的 `theme.palette` 部分：

```yaml
theme:
  palette:
    primary: indigo  # 主色调：indigo, blue, teal, green 等
    accent: indigo   # 强调色
```

### 修改导航结构

编辑 `mkdocs.yml` 中的 `nav` 部分：

```yaml
nav:
  - 主页: index.md
  - 你的章节:
    - 你的页面: your-section/your-page.md
```

### 添加新页面

1. 在 `docs/` 目录下创建 Markdown 文件
2. 在 `mkdocs.yml` 的 `nav` 中添加链接
3. 提交并推送代码

## ✨ 手册特色

### 📐 严谨的数学推导

所有核心公式都提供完整推导过程，使用 LaTeX 格式优雅呈现。从雷达方程到 FFT 算法，每个步骤都清晰可见。

### 💻 可执行的代码示例

提供 Python 和 MATLAB 示例代码，可直接运行验证：

```python
# FFT 距离处理示例
range_fft = np.fft.fft(adc_data, n_fft)
range_profile = np.abs(range_fft)
```

### 🎨 现代化阅读体验

- 🌓 深色/浅色主题切换
- 📱 完美适配移动设备
- 🔍 智能全文搜索
- ⚡ 极速加载体验

### 🖼️ 直观的可视化

包含 20+ 技术图表，覆盖信号流程、天线阵列、算法原理等核心概念。

## 👥 关于作者

### 主要贡献者

**原始内容作者**：[matreshka15](https://github.com/matreshka15)
- 原始 LaTeX 笔记项目：[mmwave_radar_learning_notebook](https://github.com/matreshka15/mmwave_radar_learning_notebook)
- 提供了详实的技术内容和图表资源

**网站构建与优化**：本团队
- 将 LaTeX 内容转换为在线阅读格式
- 优化内容结构与用户体验
- 持续维护与更新

### 致谢

感谢以下开源项目和资源：

- [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) - 优秀的文档主题
- [GitHub Pages](https://pages.github.com/) - 免费托管平台
- [MathJax](https://www.mathjax.org/) - 数学公式渲染
- Texas Instruments - IWR1443 技术文档

## 💡 如何贡献

我们欢迎所有形式的贡献！无论是内容改进、错误修正，还是新增章节，都将帮助这个手册变得更好。

### 🐛 报告问题

发现错误或有改进建议？

1. 在 [Issues](../../issues) 页面创建新 issue
2. 描述问题或建议（可以用中文或英文）
3. 添加相关标签（bug、enhancement 等）

### ✍️ 贡献内容

想要添加内容或修正错误？

1. **Fork 本仓库**到你的 GitHub 账号

2. **克隆到本地**
   ```bash
   git clone https://github.com/matreshka15/mmWave_Insight.git
   cd mmWave_Insight
   ```

3. **创建特性分支**
   ```bash
   git checkout -b feature/your-improvement
   ```

4. **编辑内容**
   - Markdown 文件位于 `docs/` 目录
   - 在本地预览：`mkdocs serve`
   - 访问 http://127.0.0.1:8000 查看效果

5. **提交更改**
   ```bash
   git add .
   git commit -m "描述你的改进"
   git push origin feature/your-improvement
   ```

6. **创建 Pull Request**
   - 在 GitHub 上打开你的 fork
   - 点击 "New Pull Request"
   - 描述你的改进内容

### 📝 内容贡献指南

贡献内容时，请遵循以下规范：

- **语言**：中文为主，专业术语可附英文
- **格式**：使用 Markdown 语法
- **公式**：使用 LaTeX 格式（`$...$` 或 `$$...$$`）
- **代码**：注明语言并添加注释
- **图片**：引用原仓库图片或提供清晰的技术图表
- **引用**：标注参考文献来源

### 🎯 贡献想法

不确定贡献什么？这些方向可能有帮助：

- ✅ 修正拼写或语法错误
- ✅ 改进现有章节的解释
- ✅ 添加更多代码示例
- ✅ 补充实际应用案例
- ✅ 翻译英文资料
- ✅ 优化图表和可视化
- ✅ 添加习题和解答

## 📄 许可与版权

### 内容许可

本手册内容基于 [matreshka15/mmwave_radar_learning_notebook](https://github.com/matreshka15/mmwave_radar_learning_notebook) 整理而成，遵循原项目的许可协议。

### 代码许可

网站框架代码（MkDocs 配置、自定义样式等）采用 **MIT License** 开源。

### 图片版权

手册中的技术图表来自原始笔记项目，版权归原作者所有。使用时请注明出处。

## 📬 联系方式

### 问题反馈

- 📮 **GitHub Issues**：[提交问题](../../issues)（推荐）
- 💬 **Discussions**：[参与讨论](../../discussions)

### 原始项目

访问原始 LaTeX 笔记项目：
- 🔗 [mmwave_radar_learning_notebook](https://github.com/matreshka15/mmwave_radar_learning_notebook)

### 社区交流

欢迎在以下平台分享本手册：

- 知乎、CSDN、博客园等技术社区
- 雷达技术交流群
- 高校课程资源

*注：分享时请附上本仓库链接，让更多人受益* 🙏

## 🎓 适合人群

本手册适合以下读者：

- 🎯 **雷达工程师**：系统学习毫米波雷达技术
- 🔬 **科研人员**：快速了解 FMCW 信号处理算法
- 🎓 **在校学生**：自动驾驶、通信等专业课程辅助
- 💼 **产品经理**：理解毫米波雷达产品技术细节
- 🚗 **自动驾驶从业者**：掌握车载雷达核心原理

## 🗺️ 学习路线建议

### 入门路径（1-2周）

1. 阅读[雷达概述](docs/radar-basics/overview.md)，建立基础概念
2. 学习[雷达方程](docs/radar-basics/radar-equation.md)，理解性能参数
3. 了解[FMCW 调制](docs/mmwave/fmcw.md)原理

### 进阶路径（2-4周）

1. 深入[信号处理](docs/mmwave/signal-processing.md)算法
2. 学习[多普勒效应](docs/radar-basics/doppler-effect.md)应用
3. 实践 Python/MATLAB 代码示例

### 实战路径（4-8周）

1. 研究[IWR1443 硬件](docs/iwr1443/hardware.md)
2. 搭建[开发环境](docs/iwr1443/development.md)
3. 完成实际项目开发
4. 阅读[参考资料](docs/references.md)深化理解

---

<div align="center">

**🎯 开启你的毫米波雷达学习之旅！**

[![Star this repo](https://img.shields.io/github/stars/matreshka15/mmWave_Insight?style=social)](../../stargazers)
[![Fork this repo](https://img.shields.io/github/forks/matreshka15/mmWave_Insight?style=social)](../../network/members)

*觉得有帮助？给个 ⭐ 支持一下！*

</div>
