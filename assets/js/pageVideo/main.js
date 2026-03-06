import { getPageId, stringToArray, normalizeText } from './utils.js';
import { initTabs, applyColors } from './ui.js';

async function buildPage() {
    const pageId = getPageId();
    if (!pageId) return window.location.replace("/erreur-404");

    try {
        const response = await fetch('/db-capsules-videos.json');
        const data = await response.json();
        const pageData = data[pageId];

        if (!pageData) return window.location.replace("/erreur-404");

        // --- MISE À JOUR DU CONTENU DE LA PAGE ---
        document.title = `${pageData.titre} | Mons parcours en 180s`;
        // Section vidéo
        document.querySelector(".block-class-melina-chercheuse-en-geochimie-et-ecotoxicologie h2").textContent = pageData.titre;
        document.querySelector(".block-class-melina-chercheuse-en-geochimie-et-ecotoxicologie .description p").textContent = `« ${pageData.phraseCle} »`;
        document.querySelector(".block-class-melina-chercheuse-en-geochimie-et-ecotoxicologie iframe").src = pageData.urlDeLaVideo;
        // Explorer le parcours
        document.querySelector(".block-class-explorer-son-parcours h2").textContent = `Explorer le parcours de ${pageData.prenom}`;
        document.querySelector(".block-class-explorer-son-parcours li:nth-of-type(1) h3").textContent = `Retracer le parcours de ${pageData.prenom}`;
        document.querySelector(".block-class-explorer-son-parcours li:nth-of-type(2) h3").textContent = `Découvrir le métier de ${pageData.prenom} : ${pageData.metier}`;
        document.querySelector(".block-class-le-parcours-universitaire h2").textContent = `Le parcours universitaire de ${pageData.prenom}`;
        document.querySelector(".block-class-son-metier h2").textContent = `Le métier de ${pageData.prenom} : ${pageData.metier}`;

        // --- INITIALISATION DE L'UI ---
        applyColors();
        initTabs();

        // --- FILTRAGE DES COMPÉTENCES ---
        const competencesAutorisees = stringToArray(pageData.competencesASorienter);
        const competencesDom = document.querySelectorAll(".block-class-les-competences-a-s-orienter li");

        competencesDom.forEach(el => {
            const titre = normalizeText(el.querySelector("h3").textContent);
            if (!competencesAutorisees.includes(titre)) {
                el.remove();
            }
        });
    } catch (error) {
        console.error("Erreur critique lors de la construction de la page :", error);
    }
}

buildPage();