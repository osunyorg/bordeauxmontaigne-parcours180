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

//Catégories -------------------------
//Get tags
const tagElems = document
  .getElementsByClassName("taxonomy-tags-videos")[0]
  .getElementsByClassName("taxonomy-children")[0]
  .getElementsByTagName("a");

let tags = [];
for (let index = 0; index < tagElems.length; index++) {
  const tagElem = tagElems[index];
  tags.push(tagElem.innerHTML);
}

//Hide not related tags
const categories = document
  .getElementsByClassName("block-categories")[0]
  .getElementsByClassName("category-item");

for (let i = 0; i < categories.length; i++) {
  const categoryElem = categories[i];
  const categoryName = categoryElem
    .getElementsByTagName("a")[0]
    .innerHTML.toLowerCase()
    .replace(/\s/g, "");

  //look for a matching tag
  let match = false;
  for (let j = 0; j < tags.length; j++) {
    const tag = tags[j].toLowerCase().replace(/\s/g, "");
    console.log(tag);
    if (tag === categoryName) {
      match = true;
    }
  }
  if (!match) {
    categoryElem.parentElement.style.display = "none";
  }
}
