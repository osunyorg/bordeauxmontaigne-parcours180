document.addEventListener('DOMContentLoaded', () => {
    // 1. Find the container of the videos
    const videosContainer = document.querySelector('.document-content .container ul');
    if (!videosContainer) return;

    const videos = Array.from(videosContainer.querySelectorAll('li'));
    if (videos.length === 0) return;

    // 2. Pick a random video
    const randomIndex = Math.floor(Math.random() * videos.length);
    const selectedVideoItem = videos[randomIndex];
    const selectedVideoArticle = selectedVideoItem.querySelector('article');

    if (!selectedVideoArticle) return;

    // 3. Extract the needed information
    const titleLink = selectedVideoArticle.querySelector('.page-title a');
    const subtitle = selectedVideoArticle.querySelector('.page-subtitle');
    const media = selectedVideoArticle.querySelector('.media');

    if (!titleLink || !media) return;

    // In the mockup, we want the name of the person and their lycée. 
    // Usually the title format is "Mélina, chercheuse en géochimie et écotoxicologie"
    // Let's just use the first part before the comma as the main title if applicable, or the full text.
    let fullName = titleLink.textContent;
    let subtitleText = '';
    
    if (fullName.includes(',')) {
        fullName = fullName.split(',')[0].trim();
    }
    
    if (subtitle) {
        subtitleText = subtitle.textContent.trim();
    }

    const href = titleLink.href;

    // 4. Create the "Vidéo à la une" section
    const featuredSection = document.createElement('section');
    featuredSection.classList.add('featured-video-section');

    const container = document.createElement('div');
    container.classList.add('container');

    const title = document.createElement('h2');
    title.textContent = 'Vidéo à la une';
    title.classList.add('featured-video-title');
    container.appendChild(title);

    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('featured-video-content');

    // Link wrapping the whole content to make it clickable
    const aWrap = document.createElement('a');
    aWrap.href = href;
    aWrap.classList.add('featured-video-link');

    // Image container
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('featured-video-media');
    imgContainer.innerHTML = media.innerHTML; // Copy the picture element

    // Text container
    const textContainer = document.createElement('div');
    textContainer.classList.add('featured-video-text');

    const nameEl = document.createElement('h3');
    nameEl.textContent = fullName;
    textContainer.appendChild(nameEl);

    // If the subtitle/quote is present
    if (subtitleText) {
        const quoteEl = document.createElement('p');
        quoteEl.classList.add('featured-video-quote');
        quoteEl.textContent = subtitleText;
        textContainer.appendChild(quoteEl);
    }

    aWrap.appendChild(imgContainer);
    aWrap.appendChild(textContainer);
    contentWrapper.appendChild(aWrap);

    container.appendChild(contentWrapper);
    featuredSection.appendChild(container);

    // 5. Insert it before the "Toutes les vidéos" block
    const documentContent = document.querySelector('.document-content');
    const firstContainer = documentContent.querySelector('.container');
    if (firstContainer) {
        documentContent.before(featuredSection, firstContainer);
    }
});
