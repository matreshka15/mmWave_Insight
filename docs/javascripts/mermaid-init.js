// ===== Mermaid 初始化（本地 bundle） =====
// 主题切换时动态重新渲染所有图表，无需刷新整页
(function () {
  const schemeTheme = () =>
    document.body.getAttribute("data-md-color-scheme") === "slate" ? "dark" : "default";

  function buildConfig() {
    return {
      startOnLoad: false,
      theme: schemeTheme(),
      securityLevel: "loose",
      themeVariables: {
        primaryColor: "#3f51b5",
        primaryTextColor: "#fff",
        primaryBorderColor: "#7c4dff",
        lineColor: "#b0bec5",
        secondaryColor: "#009688",
        tertiaryColor: "#ff9800"
      },
      fontFamily: '"Noto Sans SC", "Roboto", sans-serif',
      flowchart: { useMaxWidth: true, htmlLabels: true },
      sequence: { useMaxWidth: true },
      gantt: { useMaxWidth: true }
    };
  }

  function renderAll() {
    if (!window.mermaid) return;
    const blocks = document.querySelectorAll(".mermaid");
    blocks.forEach((el) => {
      if (el.dataset.source) {
        el.innerHTML = el.dataset.source;
      } else {
        el.dataset.source = el.innerHTML;
      }
      el.removeAttribute("data-processed");
    });
    try {
      window.mermaid.initialize(buildConfig());
      if (typeof window.mermaid.run === "function") {
        window.mermaid.run({ querySelector: ".mermaid" });
      } else if (typeof window.mermaid.init === "function") {
        window.mermaid.init(undefined, ".mermaid");
      }
    } catch (err) {
      console.warn("[mermaid-init] render failed:", err);
    }
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(() => renderAll());
  } else {
    window.addEventListener("DOMContentLoaded", renderAll);
  }

  // 主题切换监听：仅重渲 Mermaid
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.attributeName === "data-md-color-scheme") {
        renderAll();
        break;
      }
    }
  });
  observer.observe(document.body, { attributes: true });
})();
