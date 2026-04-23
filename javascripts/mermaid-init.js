// ===== Mermaid 按需懒加载 =====
// 仅当页面包含 .mermaid 元素时才下载 mermaid.min.js（~2.8 MB）
// 主题切换不刷新页面，动态重渲染
(function () {
  "use strict";

  const _me = document.currentScript;
  const _base = _me
    ? _me.src.replace(/javascripts\/mermaid-init\.js.*$/, "")
    : "";

  const schemeTheme = () =>
    document.body.getAttribute("data-md-color-scheme") === "slate"
      ? "dark"
      : "default";

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
        tertiaryColor: "#ff9800",
      },
      fontFamily: '"Noto Sans SC", "Roboto", sans-serif',
      flowchart: { useMaxWidth: true, htmlLabels: true },
      sequence: { useMaxWidth: true },
      gantt: { useMaxWidth: true },
    };
  }

  function renderAll() {
    if (!window.mermaid) return;
    const blocks = document.querySelectorAll(".mermaid");
    if (!blocks.length) return;
    blocks.forEach((el) => {
      if (el.dataset.source) el.innerHTML = el.dataset.source;
      else el.dataset.source = el.innerHTML;
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

  function hasDiagrams() {
    return document.querySelector(".mermaid") !== null;
  }

  let _coreLoaded = false;
  function loadMermaid(cb) {
    if (_coreLoaded || window.mermaid) { cb && cb(); return; }
    _coreLoaded = true;
    const s = document.createElement("script");
    s.src = _base + "javascripts/libs/mermaid.min.js";
    s.onload = cb || null;
    document.head.appendChild(s);
  }

  function initForPage() {
    if (!hasDiagrams()) return;
    if (window.mermaid) renderAll();
    else loadMermaid(renderAll);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(initForPage);
  } else {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initForPage);
    } else {
      initForPage();
    }
  }

  // 主题切换监听：仅重渲 Mermaid，不刷新页面
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.attributeName === "data-md-color-scheme") {
        if (window.mermaid) renderAll();
        else if (hasDiagrams()) loadMermaid(renderAll);
        break;
      }
    }
  });
  observer.observe(document.body, { attributes: true });
})();
