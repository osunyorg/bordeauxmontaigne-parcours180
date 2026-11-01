import { shuffle } from "./helper";

function removeProfessions() {
  const pages = document.querySelector(".pages").children;
  Array.from(pages).forEach((page) => {
    const title = page.querySelector(".page-title a");
    title.innerHTML = title.innerHTML.split(",")[0].trim();
  });
}

function shuffleVideos() {
  const container = document.querySelector(".pages");
  const pages = shuffle(Array.from(container.children));

  // Remplace le contenu du conteneur par les pages mélangées
  container.replaceChildren(...pages);
}

removeProfessions();
shuffleVideos();
