// 初始化 Mermaid
window.mermaidConfig = {
  startOnLoad: true,
  theme: document.body.getAttribute("data-md-color-scheme") === "slate" ? "dark" : "default",
  themeVariables: {
    primaryColor: '#3f51b5',
    primaryTextColor: '#fff',
    primaryBorderColor: '#7c4dff',
    lineColor: '#b0bec5',
    secondaryColor: '#009688',
    tertiaryColor: '#ff9800'
  },
  fontFamily: '"Noto Sans SC", "Roboto", sans-serif',
  fontSize: '16px',
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true
  }
};

document$.subscribe(() => {
  if (window.mermaid) {
    mermaid.initialize(window.mermaidConfig);
    // 手动渲染所有 Mermaid 图表
    mermaid.init(undefined, ".mermaid");
  }
  
  // 监听主题切换
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === "data-md-color-scheme") {
        location.reload();
      }
    });
  });
  
  observer.observe(document.body, {
    attributes: true
  });
});
