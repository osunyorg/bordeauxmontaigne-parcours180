const slider = document.querySelector('body.page__home .document-content .blocks .block-class-les-videos-par-competences-a-s-orienter .container ul');
slider.style.position = 'relative'

const wrapper = document.createElement('div');
wrapper.style.position = 'relative';

slider.parentNode.insertBefore(wrapper, slider);
wrapper.appendChild(slider);

// const leftArrowContainer = document.createElement("div")
const leftArrow = document.createElement("img")
leftArrow.src = "/assets/images/chevron.svg"
// leftArrow.style.backgroundColor = "red"
leftArrow.style.width = "50px"
leftArrow.style.height = "50px"
leftArrow.style.position = "absolute"
leftArrow.style.left = 0
leftArrow.style.bottom = '0'
leftArrow.style.zIndex = '10';
leftArrow.style.transform = "translateY(100%)"
leftArrow.style.cursor = "pointer"
leftArrow.style.transition = "opacity .3s"
wrapper.appendChild(leftArrow)

slider.addEventListener("scroll", () => {
  leftArrow.style.opacity = slider.scrollLeft <= 1 ? "0" : "100"
})

leftArrow.addEventListener("click", () => {
  slider.scrollBy({ left: -600, behavior: 'smooth' });
})

//right arrow
const rightArrow = document.createElement("img")
rightArrow.src = "/assets/images/chevron.svg"
// rightArrow.style.backgroundColor = "red"
rightArrow.style.width = "50px"
rightArrow.style.height = "50px"
rightArrow.style.position = "absolute"
rightArrow.style.right = 0
rightArrow.style.bottom = 0
rightArrow.style.zIndex = '10';
// rightArrow.style.transform = "translateY(-50%)"
rightArrow.style.transform = "translateY(100%) rotate(180deg)"
rightArrow.style.cursor = "pointer"
rightArrow.style.transition = "opacity .3s"
wrapper.appendChild(rightArrow)

// slider.scrollWidth
// console.log(slider.getBoundingClientRect())
slider.addEventListener("scroll", () => {
  console.log(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth)
  rightArrow.style.opacity = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1 ? "0" : "100"
})

rightArrow.addEventListener("click", () => {
  slider.scrollBy({ left: 600, behavior: 'smooth' });
})
