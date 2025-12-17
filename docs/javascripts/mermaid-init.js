// 初始化 Mermaid
document$.subscribe(() => {
  mermaid.initialize({
    startOnLoad: true,
    theme: document.body.getAttribute("data-md-color-scheme") === "slate" ? "dark" : "default"
  });
  
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
