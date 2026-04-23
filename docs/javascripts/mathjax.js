// ===== MathJax 按需懒加载 =====
// 仅当页面包含 .arithmatex 元素时才下载 tex-mml-chtml.js（~1.1 MB）
// 配置遵循 Material for MkDocs 官方推荐：
//   options.ignoreHtmlClass:  ".*|"        — 忽略所有普通元素
//   options.processHtmlClass: "arithmatex" — 只处理 arithmatex 包裹的公式
(function () {
  "use strict";

  // 捕获脚本自身的绝对 URL，推断站点根路径
  // document.currentScript 在同步 <script> 执行时有效
  var _me = document.currentScript;
  var _base = _me
    ? _me.src.replace(/javascripts\/mathjax\.js.*$/, "")
    : "";

  // MathJax 全局配置 —— 必须在 tex-mml-chtml.js 加载前设置
  window.MathJax = {
    tex: {
      // arithmatex(generic:true) 输出 \(...\) 行内 / \[...\] 块级
      inlineMath:  [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true,
    },
    options: {
      // Material for MkDocs 官方推荐：仅处理 .arithmatex 元素，
      // 避免扫描整个 DOM 造成性能损失和误渲染
      ignoreHtmlClass:  ".*|",
      processHtmlClass: "arithmatex",
    },
  };

  // 判断当前页面是否有数学公式
  function hasMath() {
    return document.querySelector(".arithmatex") !== null;
  }

  // 懒加载核心库（加载完成后 MathJax 会自动渲染当前页面）
  var _coreLoaded = false;
  function loadCore() {
    if (_coreLoaded) return;
    _coreLoaded = true;
    var s = document.createElement("script");
    s.src = _base + "javascripts/libs/tex-mml-chtml.js";
    document.head.appendChild(s);
  }

  // SPA 导航后对新页面重新渲染
  function typesetIfReady() {
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise().catch(function (e) {
        console.warn("[mathjax] typeset error:", e);
      });
    }
  }

  // 每次页面（含 SPA 切换）检查并按需加载/渲染
  function initForPage() {
    if (!hasMath()) return;
    if (_coreLoaded) {
      // 核心已在内存中：直接重渲新页面内容
      typesetIfReady();
    } else {
      // 首次出现公式：懒加载核心，MathJax 启动时自动渲染
      loadCore();
    }
  }

  if (typeof document$ !== "undefined") {
    // MkDocs Material SPA 模式：document$ 在初始和每次 SPA 导航后发射
    document$.subscribe(initForPage);
  } else {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initForPage);
    } else {
      initForPage();
    }
  }
})();
