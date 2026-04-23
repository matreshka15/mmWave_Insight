// ===== 页面加载管理器 =====
// 1. 隐藏初始加载遮罩
// 2. 图片懒加载渐入
// 3. SPA 导航时为重内容页给出微提示
(function () {
  "use strict";

  // ---- 遮罩控制 ----
  function hideLoader() {
    const el = document.getElementById("mm-loader");
    if (!el) return;
    el.classList.add("mm-out");
    // 彻底从 DOM 移除，避免遮挡可交互元素
    el.addEventListener("transitionend", () => el.remove(), { once: true });
  }

  // DOMContentLoaded 后立即开始隐藏动画，不等所有资源
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hideLoader);
  } else {
    hideLoader();
  }
  // window.load 时再确认一次（防止 DOMContentLoaded 来不及注册）
  window.addEventListener("load", hideLoader, { once: true });

  // MkDocs Material SPA：每次切换页面后也隐藏
  if (typeof document$ !== "undefined") {
    document$.subscribe(hideLoader);
  }

  // ---- 图片懒加载渐入 ----
  function setupImgFade() {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      if (img.complete) {
        img.classList.add("mm-img-loaded");
      } else {
        img.addEventListener("load", () => img.classList.add("mm-img-loaded"), {
          once: true,
        });
      }
    });
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(setupImgFade);
  } else {
    document.addEventListener("DOMContentLoaded", setupImgFade);
  }
})();
