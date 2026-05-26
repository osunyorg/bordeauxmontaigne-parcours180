export function initTabs() {
  const parcoursBlocks = document.querySelectorAll(
    ".block-class-explorer-son-parcours li",
  );
  const coucou = 1;
  const blocks = [
    document.querySelector(".block-class-le-parcours-universitaire"),
    document.querySelector(".block-class-son-metier"),
    document.querySelector(".block-class-les-competences-a-s-orienter"),
  ];

  const sujetsBlock = document.querySelector(".block-class-les-sujets-abordes");
  sujetsBlock?.style.setProperty("display", "none");

  if (!parcoursBlocks.length) return;

  parcoursBlocks.forEach((el, index) => {
    el.addEventListener("click", () => {
      const isAlreadySelected = el.classList.contains("selected");

      parcoursBlocks.forEach((block) => block.classList.remove("selected"));

      blocks.forEach((sec) => sec?.style.setProperty("display", "none"));

      sujetsBlock?.style.setProperty("display", "none");

      if (!isAlreadySelected) {
        el.classList.add("selected");

        if (blocks[index]) {
          blocks[index].style.display = "block";
        }

        // 3e block
        if (index === 2) {
          sujetsBlock?.style.setProperty("display", "block");
        }
      }
    });
  });
}

export const filterSubjects = () => {
  const subjects = document.querySelectorAll(
    ".taxonomy-les-sujets-abordes .taxonomy-children li",
  );

  const articles = document.querySelectorAll(
    ".block-class-les-sujets-abordes .container .block-content .categories > *",
  );

  // Liste des titres de compétences
  const subjectTitles = Array.from(subjects).map((competence) =>
    competence.textContent.trim(),
  );

  articles.forEach((article) => {
    const articleTitle =
      article.querySelector("h2, h3, h4, a")?.textContent.trim() || "";

    const found = subjectTitles.some((title) => articleTitle.includes(title));

    article.style.display = found ? "block" : "none";
  });
};

export const filterCompetences = () => {
  const competences = document.querySelectorAll(
    ".taxonomy-les-competences-a-sorienter .taxonomy-children li",
  );

  const articles = document.querySelectorAll(
    ".block-class-les-competences-a-s-orienter .container .block-content .categories > *",
  );

  // Liste des titres de compétences
  const competenceTitles = Array.from(competences).map((competence) =>
    competence.textContent.trim(),
  );

  articles.forEach((article) => {
    const articleTitle =
      article.querySelector("h2, h3, h4, a")?.textContent.trim() || "";

    const found = competenceTitles.some((title) =>
      articleTitle.includes(title),
    );

    article.style.display = found ? "block" : "none";
  });
};

export function applyColors() {
  const articles = document.querySelectorAll(
    ".block-class-les-competences-a-s-orienter li article",
  );
  const subjects = document.querySelectorAll(
    ".block-class-les-sujets-abordes li",
  );
  const couleurs = [
    "#4567AF",
    "#74368B",
    "#059EA0",
    "#DE912C",
    "#1A4FD5",
    "#74368B",
    "#E7242C",
    "#059EA0",
  ];

  const subjectArticles = document.querySelectorAll(
    ".block-class-les-sujets-abordes .container .block-content .categories > *",
  );

  subjects.forEach((subject, index) => {
    const display = window.getComputedStyle(subject).display;
    if (subjectArticles[index].style.display === "none") return;

    const couleur = (Math.random() * (couleurs.length - 1)).toFixed(0);
    console.log(couleurs[couleur]);
    subject.style.borderColor = couleurs[couleur];
  });

  articles.forEach((art, index) => {
    if (couleurs[index]) art.style.background = couleurs[index];
  });
}
