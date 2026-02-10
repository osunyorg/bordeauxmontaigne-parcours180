const parcoursBlocks = document.querySelectorAll(".block-class-explorer-le-parcours-de-melina li");

if (parcoursBlocks.length !== 3) {
    return;
}

parcoursBlocks.forEach(el => {
    el.addEventListener('click', () => {
        const isAlreadySelected = el.classList.contains('selected');

        parcoursBlocks.forEach(block => block.classList.remove("selected"));

        if (!isAlreadySelected) {
            el.classList.add("selected");
        }
    });
});