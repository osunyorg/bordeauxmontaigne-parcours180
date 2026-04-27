import { initTabs, applyColors } from './ui.js';

async function buildPage() {
    // --- INITIALISATION DE L'UI ---
    applyColors();
    initTabs();

    // --- FILTRAGE DES COMPÉTENCES ---
    // const competencesAutorisees = stringToArray(pageData.competencesASorienter);
    // const competencesDom = document.querySelectorAll(".block-class-les-competences-a-s-orienter li");

    // competencesDom.forEach(el => {
    //     const titre = normalizeText(el.querySelector("h3").textContent);
    //     if (!competencesAutorisees.includes(titre)) {
    //         el.remove();
    //     }
    // });
}

buildPage();