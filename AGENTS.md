# mmWave Insight — Agent Instructions

**mmWave Insight** is a bilingual (Chinese/English) MkDocs-Material documentation site covering mmWave radar theory, FMCW signal processing, and TI IWR1443 hardware development. Deployed to GitHub Pages at <https://matreshka15.github.io/mmWave_Insight/>.

## Quick Commands

```bash
# Install dependencies
pip install -r requirements.txt

# Local preview (live-reload)
mkdocs serve

# Build static site
mkdocs build

# Deploy to GitHub Pages
mkdocs gh-deploy
```

## Repo Structure

| Path | Purpose |
|---|---|
| `mkdocs.yml` | Site config, nav tree, extensions, plugins |
| `docs/` | All Markdown content pages |
| `docs/stylesheets/extra.css` | Custom CSS overrides |
| `docs/javascripts/` | MathJax + Mermaid init scripts; bundled libs |
| `docs/images/` | Figures and diagrams |

## Content Sections

Defined in the `nav` block of `mkdocs.yml`:

- `radar-basics/` — Overview, radar equation, Doppler effect
- `mmwave/` — FMCW modulation, signal processing, target detection
- `iwr1443/` — IWR1443 hardware, development environment
- Root-level pages — Home (`index.md`), interactive playground, exercises, image gallery, references

## Writing Conventions

- **Language**: Chinese is primary; technical terms may include English in parentheses.
- **Math**: Use `pymdownx.arithmatex` (`$...$` inline, `$$...$$` block). MathJax renders via `docs/javascripts/mathjax.js`.
- **Diagrams**: Use fenced ` ```mermaid ``` ` blocks. Mermaid is bundled locally at `docs/javascripts/libs/mermaid.min.js`.
- **Admonitions**: Use `!!! tip`, `!!! info`, `!!! abstract`, `!!! warning`, `??? question` (collapsible) for callouts.
- **Tabs**: Use `=== "Label"` inside `pymdownx.tabbed` blocks for side-by-side comparisons.
- **Headings**: Emoji prefixes are standard (e.g., `## 🔬 原理分析`).
- **Cross-links**: Use relative Markdown links (`../radar-basics/overview.md`), not site-root paths.

## Adding a New Page

1. Create `docs/<section>/<page>.md`.
2. Add an entry to the `nav` block in `mkdocs.yml`.
3. Run `mkdocs serve` to verify rendering.

## Key Configuration Notes

- `pymdownx.superfences` uses a **custom fence** for Mermaid — always use `name: mermaid` in config; do **not** add `mermaid` to `extra_javascript` directly.
- JS/CSS assets are **bundled locally** under `docs/javascripts/libs/` and `docs/stylesheets/` — do not reference CDN URLs for these.
- Search plugin is configured for both `zh` and `en` languages.

## Relevant Docs

- [README.md](README.md) — Project overview and content map
- [mkdocs.yml](mkdocs.yml) — Full site configuration
- [MkDocs Material docs](https://squidfunk.github.io/mkdocs-material/) — Theme reference
