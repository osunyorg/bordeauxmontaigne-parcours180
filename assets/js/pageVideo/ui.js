export function initTabs() {
    const parcoursBlocks = document.querySelectorAll(".block-class-explorer-son-parcours li");
    const blocks = [
        document.querySelector(".block-class-le-parcours-universitaire"),
        document.querySelector(".block-class-son-metier"),
        document.querySelector(".block-class-les-competences-a-s-orienter")
    ];

    if (!parcoursBlocks.length) return;

    parcoursBlocks.forEach((el, index) => {
        el.addEventListener('click', () => {
            const isAlreadySelected = el.classList.contains('selected');
            parcoursBlocks.forEach(block => block.classList.remove("selected"));
            blocks.forEach(sec => sec?.style.setProperty('display', 'none'));

            if (!isAlreadySelected) {
                el.classList.add("selected");
                if (blocks[index]) blocks[index].style.display = "block";
            }
        });
    });
}

export function applyColors() {
    const articles = document.querySelectorAll(".block-class-les-competences-a-s-orienter li article");
    const couleurs = ["#4567AF", "#74368B", "#059EA0", "#DE912C", "#1A4FD5", "#74368B", "#E7242C", "#059EA0"];
    
    articles.forEach((art, index) => {
        if (couleurs[index]) art.style.background = couleurs[index];
    });
}