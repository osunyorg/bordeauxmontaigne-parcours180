function waitFor(selector, root = document) {
  return new Promise((resolve) => {
    const el = root.querySelector(selector);
    if (el) return resolve(el);

    const observer = new MutationObserver(() => {
      const el = root.querySelector(selector);
      if (el) {
        observer.disconnect();
        resolve(el);
      }
    });
    observer.observe(root, { childList: true, subtree: true });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector(".pf-trigger-btn");

  trigger.addEventListener("click", async () => {
    const aside = document.querySelector(".pf-modal-aside");
    if (aside) aside.style.display = "none";

    const checkbox = await waitFor(".pf-checkbox-input");
    checkbox.click();
  });
});
