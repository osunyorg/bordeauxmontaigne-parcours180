import { getPageId } from "js/pageVideo/utils";

async function populateSlider() {
    const pageId = getPageId();
    console.log("pageId", pageId)
    // if (!pageId) return window.location.replace("/erreur-404");

    try {
        const response = await fetch('/db-capsules-videos.json');
        const data = await response.json();
        const pageData = data[pageId];
        console.log("pageData", pageData)
    } catch (error) {
        console.error("Erreur critique lors de la construction de la page :", error);
    }

}

populateSlider()