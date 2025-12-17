# mmWave Insight

## mmWave Radar Insight | 毫米波雷达洞察

> **Deep Dive into mmWave Radar Technology | 深入毫米波雷达技术**

基于 [matreshka15/mmwave_radar_learning_notebook](https://github.com/matreshka15/mmwave_radar_learning_notebook) 打造的专业毫米波雷达学习平台。使用 MkDocs Material 主题构建，提供优质的在线阅读体验。

## 📖 内容概览

- **雷达基础**：雷达原理、雷达方程、多普勒效应
- **毫米波雷达**：FMCW 调制、信号处理、目标检测
- **IWR1443 平台**：TI 雷达硬件介绍、开发环境搭建
- **参考资料**：教材、论文、在线资源

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
   - 几分钟后访问：`https://yourusername.github.io/repo-name/`

### 方法 2：手动部署

```bash
mkdocs gh-deploy
```

## 🛠️ 项目结构

```
mmwave_radar_learning_notebook/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 配置
├── docs/                        # 文档源文件
│   ├── index.md                # 主页
│   ├── javascripts/
│   │   └── mathjax.js          # 数学公式支持
│   ├── radar-basics/           # 雷达基础
│   │   ├── overview.md
│   │   ├── radar-equation.md
│   │   └── doppler-effect.md
│   ├── mmwave/                 # 毫米波雷达
│   │   ├── fmcw.md
│   │   ├── signal-processing.md
│   │   └── target-detection.md
│   ├── iwr1443/                # IWR1443 平台
│   │   ├── hardware.md
│   │   └── development.md
│   └── references.md           # 参考资料
├── mkdocs.yml                  # MkDocs 配置文件
└── README.md                   # 本文件
```

## ✨ 特性

- 📱 **响应式设计**：支持桌面、平板、手机
- 🌓 **深色模式**：支持浅色/深色主题切换
- 🔍 **全文搜索**：支持中英文搜索
- 📐 **数学公式**：使用 MathJax 渲染 LaTeX 公式
- 💻 **代码高亮**：Python、MATLAB、C 代码高亮
- 🖼️ **丰富图示**：引用原项目的技术图片，直观易懂
- 🎨 **Material Design**：现代化的 UI 设计
- 🚀 **快速加载**：静态网站，秒开

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

## 📝 贡献

欢迎贡献内容和改进！

1. Fork 本项目
2. 创建特性分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'Add some feature'`
4. 推送分支：`git push origin feature/your-feature`
5. 提交 Pull Request

## 📄 许可证

本项目基于原 [mmwave_radar_learning_notebook](https://github.com/matreshka15/mmwave_radar_learning_notebook) 项目整理。

内容遵循原项目的许可证。网站框架和代码采用 MIT 许可证。

## 🙏 致谢

- 原始笔记作者：[matreshka15](https://github.com/matreshka15)
- 主题：[MkDocs Material](https://squidfunk.github.io/mkdocs-material/)
- 平台：[GitHub Pages](https://pages.github.com/)

## 📧 联系方式

如有问题或建议：

- 提交 Issue
- 发起 Pull Request
- 访问原项目：[mmwave_radar_learning_notebook](https://github.com/matreshka15/mmwave_radar_learning_notebook)

---

**享受学习毫米波雷达的旅程！** 🎯📡
