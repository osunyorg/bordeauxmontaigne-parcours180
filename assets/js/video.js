const container = document.getElementsByClassName(
  "block-class-video-content-selector"
)[0];

//Get chapters to hide in correct order
let chapters = [];
chapters.push(document.getElementsByClassName("block-class-video-metier")[0]); //0
chapters.push(document.getElementsByClassName("block-class-video-parcours")[0]); //1
chapters.push(document.getElementsByClassName("block-class-video-links")[0]); //2

//Get buttons
const buttons = container.getElementsByTagName("li");

for (let index = 0; index < buttons.length; index++) {
  const button = buttons[index];

  button.addEventListener("click", () => {
    setSelectedContent(button, index);
  });
}

function setSelectedContent(currentButton, index) {
  if (currentButton.classList.contains("selected")) {
    currentButton.classList.remove("selected");
    chapters[index].classList.remove("selected");
    return;
  }

  for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    //Deselect all if the button already contains selected
    button.classList.remove("selected");
    chapters[index].classList.remove("selected");
  }

  currentButton.classList.add("selected");
  chapters[index].classList.add("selected");
}
