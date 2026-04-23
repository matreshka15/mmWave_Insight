# 更新日志

本页记录 mmWave Insight 文档站点的重要变更。版本遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/) 规范。

## [1.1.0] — 2026-04-23

### ✨ 新增
- **进阶理论**：《MIMO 与 DOA 估计》专章，涵盖 TDM / BPM / DDMA-MIMO、虚拟阵列构造、Capon / MUSIC / ESPRIT 完整实现。
- **进阶理论**：《高级主题》专章，涵盖相位噪声、发射泄漏对消、STAP、非线性 Chirp 校准、点云、微多普勒、SDK 实时预算。
- **目标检测**：补齐 MUSIC 算法的 Python 可运行实现与超分辨率验证案例。
- **附加资源**：新增术语表、贡献指南、更新日志。
- **站点**：GitHub Actions 自动部署（`.github/workflows/deploy.yml`）、LICENSE (MIT)。

### 🔧 站点改进
- `mkdocs.yml` 启用 `git-revision-date-localized`、`glightbox`、`minify` 插件。
- 主题新增 `navigation.footer`、`navigation.indexes`、`content.action.edit`、`search.share` 等功能。
- 扩展 markdown：`abbr`、`def_list`、`tasklist`、`keys`、`caret/mark/tilde`、`smartsymbols`、`critic`。
- 样式：深色模式图片适配、打印样式、自定义滚动条、标题渐入动画。
- MathJax：移除 CDN 依赖（已使用本地 bundle），启动更快且不受外网波动影响。
- Mermaid：主题切换 **不再刷新页面**，改为动态重渲染。

### 🗑 移除
- `requirements.txt` 中过窄的版本下限，替换为完整锁定范围。

---

## [1.0.0] — 2025 初始发布

### 内容
- 雷达基础：概述、雷达方程、多普勒效应
- 毫米波雷达：FMCW 原理、信号处理、目标检测
- 硬件：IWR1443 硬件规格、开发环境搭建
- 互动：交互式游乐场、练习题、图片库、参考资料

### 站点
- MkDocs Material 主题
- MathJax 数学公式渲染
- Mermaid 图表
- 中英双语搜索
