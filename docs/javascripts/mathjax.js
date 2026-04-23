// ===== MathJax 按需懒加载（SVG 输出模式） =====
// 使用 tex-svg.js：所有字形内嵌为 SVG path，无需外部字体文件，
// 也不向 DOM 注入 CSSStyleSheet，彻底规避 CHTML 的 404 和 insertRule 问题
(function () {
  "use strict";

  var _me = document.currentScript;
  var _base = _me
    ? _me.src.replace(/javascripts\/mathjax\.js.*$/, "")
    : "";

  // MathJax 全局配置 —— 必须在 tex-svg.js 加载前设置
  window.MathJax = {
    tex: {
      inlineMath:  [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true,
    },
    svg: {
      // fontCache: global — 全站复用 SVG <defs>，避免同字符重复嵌入
      fontCache: "global",
    },
    options: {
      // Material for MkDocs 官方推荐：只处理 .arithmatex 元素
      ignoreHtmlClass:  ".*|",
      processHtmlClass: "arithmatex",
    },
  };

  function hasMath() {
    return document.querySelector(".arithmatex") !== null;
  }

  var _coreLoaded = false;
  function loadCore() {
    if (_coreLoaded) return;
    _coreLoaded = true;
    var s = document.createElement("script");
    s.src = _base + "javascripts/libs/tex-svg.js";
    document.head.appendChild(s);
  }

  // SPA 导航后重渲新内容
  // 在 SPA 环境中需先 clear() 再 typesetPromise()，否则 MathJax
  // 不会处理已被替换的 DOM 节点
  function typesetIfReady() {
    if (!window.MathJax || !MathJax.typesetPromise) return;
    try {
      // 重置 MathJax 对 document 的状态，让它重新扫描全部 arithmatex 元素
      if (MathJax.startup && MathJax.startup.document) {
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
      }
      MathJax.typesetPromise().catch(function (e) {
        console.warn("[mathjax] typeset error:", e);
      });
    } catch (e) {
      console.warn("[mathjax] typesetIfReady error:", e);
    }
  }

  function initForPage() {
    if (!hasMath()) return;
    if (_coreLoaded) {
      typesetIfReady();
    } else {
      loadCore(); // 首次加载：MathJax 启动后自动渲染
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
})();
