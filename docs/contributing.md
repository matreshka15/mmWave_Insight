# 贡献指南

感谢你有兴趣为 **mmWave Insight** 做贡献！本项目采用 MIT 许可，欢迎任何形式的贡献：内容修订、示例代码、图表补充、错误报告、翻译。

## 🚀 快速开始

```bash
# 1. Fork + clone
git clone https://github.com/<your-name>/mmWave_Insight.git
cd mmWave_Insight

# 2. 创建虚拟环境并安装依赖
python -m venv .venv
. .venv/Scripts/activate   # Windows PowerShell: .venv\Scripts\Activate.ps1
pip install -r requirements.txt

# 3. 本地实时预览
mkdocs serve
# 浏览器打开 http://127.0.0.1:8000

# 4. 严格构建（CI 也使用该命令）
mkdocs build --strict
```

## 📂 仓库结构

| 路径 | 用途 |
|---|---|
| `mkdocs.yml` | 站点配置、导航树、插件 |
| `docs/` | 所有 Markdown 内容 |
| `docs/stylesheets/extra.css` | 自定义 CSS |
| `docs/javascripts/` | MathJax / Mermaid 初始化 |
| `docs/images/` | 本地图片资源 |
| `.github/workflows/` | CI/CD |

## ✍️ 写作规范

- **语言**：中文为主，专业术语首次出现附英文。
- **公式**：使用 `pymdownx.arithmatex`，行内 `$...$`，块级 `$$...$$`。
- **图表**：Mermaid 使用围栏式代码块 ```` ```mermaid ````。
- **Admonition**：`!!! tip | info | abstract | warning | danger | example`，可折叠用 `???`。
- **标签页**：`=== "标题"`。
- **标题**：一级标题带 emoji，二级标题以动词开头，层级不超过 4 级。
- **交叉引用**：使用相对路径（`../mmwave/fmcw.md`）。
- **代码**：指定语言（```` ```python ````），关键行用 `# (1)!` 注释 + `1. 说明` 解释。
- **引用**：论文、数据表以脚注或章末 `📚 扩展阅读` 区块列出。

## ➕ 新增页面流程

1. 在 `docs/<section>/` 下创建 `.md` 文件
2. 在 `mkdocs.yml` 的 `nav` 添加条目
3. 运行 `mkdocs serve` 验证
4. 运行 `mkdocs build --strict`，确保 **无警告**（包括 broken link）
5. 提交 PR

## 🐛 报告问题

请在 [GitHub Issues](https://github.com/matreshka15/mmWave_Insight/issues/new) 提交，包含：

- 页面链接或文件路径
- 问题截图或最小复现步骤
- 期望行为

## 🔁 Pull Request 检查清单

- [ ] 本地 `mkdocs build --strict` 通过
- [ ] 新增/修改的公式、图表已自查渲染
- [ ] 代码片段可运行（Python ≥ 3.9 / NumPy 标准库）
- [ ] 保持中立、事实化的技术风格，避免广告化表达
- [ ] 若引入新依赖，已更新 `requirements.txt`

## 📜 许可

提交即视为同意本项目 [MIT 许可](https://github.com/matreshka15/mmWave_Insight/blob/main/LICENSE)。
