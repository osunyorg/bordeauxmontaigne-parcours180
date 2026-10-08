document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector(".pf-trigger-btn")
  search.addEventListener("click", () => {
  console.log("search")
      const container = document.querySelector(".pf-modal-aside")// as HTMLInputElement
      container.style.display = "none"
    setTimeout(() => {
      const checkbox = document.querySelector(".pf-checkbox-input")// as HTMLInputElement
      checkbox.click()
    }, 500)
  })
})
setTimeout(() => {
}, 200)
