const slider = document.querySelector('body.page__home .document-content .blocks .block-class-les-videos-par-competences-a-s-orienter ul');
let isDown = false;
let startX;
let scrollLeft;
let isMoving = false;

function scrollCanvas(direction) {
    const scrollAmount = slider.clientWidth * 0.8;
    
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    isMoving = false;
    slider.classList.add('active');
    
    slider.style.scrollSnapType = 'none';
    slider.style.scrollBehavior = 'auto';

    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    if (!isDown) return;
    stopDragging();
});

slider.addEventListener('mouseup', () => {
    if (!isDown) return;
    stopDragging();
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;
    
    if (Math.abs(x - startX) > 5) {
        isMoving = true;
    }
    
    slider.scrollLeft = scrollLeft - walk;
});

function stopDragging() {
    isDown = false;
    slider.classList.remove('active');
    
    slider.style.scrollSnapType = 'x mandatory';
    slider.style.scrollBehavior = 'smooth';
}

slider.addEventListener('click', (e) => {
    if (isMoving) {
        e.preventDefault();
        e.stopImmediatePropagation();
    }
}, true);