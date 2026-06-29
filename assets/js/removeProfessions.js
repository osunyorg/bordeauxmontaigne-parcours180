const pages = document.querySelector(".pages").childNodes;
pages.forEach((page) => {
  const title = page.querySelector(".page-title a");
  title.innerHTML = title.innerHTML.split(",")[0].trim();
});
