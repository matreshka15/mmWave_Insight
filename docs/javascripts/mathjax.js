window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
    packages: {"[+": ["noerrors"]}
  },
  svg: {
    fontCache: "global"
  },
  chtml: {
    matchFontHeight: false,
    scale: 1.0,
    mtextInheritFont: true,
    mathmlSpacing: true,
    skipAttributes: {
      "mathbackground": true,
      "mathcolor": true
    },
    fonts: {
      webFont: "default"
    }
  },
  loader: {
    load: ["[tex]/noerrors"],
    paths: {
      mathjax: "https://cdn.jsdelivr.net/npm/mathjax@3/es5"
    }
  },
  startup: {
    // 禁用自动渲染，我们将手动控制
    typeset: false,
    // 配置启动后回调
    ready: () => {
      // 确保 MathJax 启动完成
      MathJax.startup.defaultReady();
      // 立即渲染当前页面的公式
      MathJax.typeset();
    }
  },
  options: {
    ignoreHtmlClass: "",
    processHtmlClass: ".*",
    enableMenu: false
  }
};

// 监听页面内容变化
if (typeof document$ !== 'undefined') {
  document$.subscribe(() => {
    // 确保 MathJax 已加载完成
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise();
    } else if (window.MathJax && MathJax.typeset) {
      MathJax.typeset();
    }
  });
}

// 页面完全加载后再次渲染，确保所有内容都已就绪
window.addEventListener('load', () => {
  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetPromise();
  } else if (window.MathJax && MathJax.typeset) {
    MathJax.typeset();
  }
});
