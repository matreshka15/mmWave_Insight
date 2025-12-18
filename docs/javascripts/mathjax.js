window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  startup: {
    pageReady: () => {
      return MathJax.startup.defaultPageReady();
    }
  },
  chtml: {
    fontURL: 'https://gcore.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise()
})
