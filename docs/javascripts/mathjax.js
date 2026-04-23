// ===== MathJax 按需懒加载 =====
// 仅当页面包含数学公式时才下载 tex-mml-chtml.js（~1.1 MB）
// 无公式页面直接跳过，节省大量流量和解析时间
(function () {
  "use strict";

  // 捕获脚本自身 URL，推断站点根路径
  const _me = document.currentScript;
  const _base = _me
    ? _me.src.replace(/javascripts\/mathjax\.js.*$/, "")
    : "";

  // MathJax 全局配置（在核心加载前设置）
  window.MathJax = {
    tex: {
      inlineMath: [["\\(", "\\)"], ["$", "$"]],
      displayMath: [["\\[", "\\]"], ["$$", "$$"]],
      processEscapes: true,
      processEnvironments: true,
      packages: { "[+": ["noerrors"] },
    },
    svg: { fontCache: "global" },
    chtml: {
      matchFontHeight: false,
      scale: 1.0,
      mtextInheritFont: true,
    },
    loader: { load: ["[tex]/noerrors"] },
    startup: {
      typeset: false,
      ready() {
        MathJax.startup.defaultReady();
        MathJax.typeset();
      },
    },
    options: {
      ignoreHtmlClass: "",
      processHtmlClass: ".*",
      enableMenu: false,
    },
  };

  // 判断当前页面是否有数学公式
  function hasMath() {
    return (
      document.querySelector(".arithmatex") !== null ||
      document.querySelector(".MathJax") !== null
    );
  }

  // 调用渲染
  function typesetPage() {
    if (!window.MathJax) return;
    try {
      if (MathJax.typesetPromise) MathJax.typesetPromise();
      else if (MathJax.typeset) MathJax.typeset();
    } catch (e) {
      console.warn("[mathjax] typeset error:", e);
    }
  }

  // 懒加载核心库
  let _coreLoaded = false;
  function loadCore(cb) {
    if (_coreLoaded) { cb && cb(); return; }
    _coreLoaded = true;
    const s = document.createElement("script");
    s.src = _base + "javascripts/libs/tex-mml-chtml.js";
    s.onload = cb || null;
    document.head.appendChild(s);
  }

  // 每次页面（含 SPA 切换）后检查并按需加载/渲染
  function initForPage() {
    if (!hasMath()) return;
    if (window.MathJax?.startup?.document) {
      // 核心已加载，直接重渲
      typesetPage();
    } else {
      loadCore(typesetPage);
    }
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

  // window.load 兜底：确保所有 DOM 就绪后渲染
  window.addEventListener("load", () => { if (hasMath()) typesetPage(); }, { once: true });
})();
