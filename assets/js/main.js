import "./theme/";

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('source').forEach(source => {
        if (source.hasAttribute('srcset')) {
            let url = source.getAttribute('srcset');
            let nouvelleUrl = url.replace(/width=\d+/, 'width=1500');
            source.setAttribute('srcset', nouvelleUrl);
        }
    });
});

// HOMEPAGE
if (window.location.pathname === "/") {
    import("./home/grabToScroll");
};

// PAGE VIDEO
if (window.location.pathname.includes("/les-videos/")) {
    import("./pageVideo/main.js");
};

// PAGE CATEGORIES TERRITOIRES
if (window.location.pathname.includes("/territoires/")) {
    const territoryColors = {
        'dordogne': '#FF3D45',
        'gironde': '#346FFF',
        'landes': '#FFC263',
        'lot-et-garonne': '#C458CB',
        'pyrenees-atlantiques': '#46C7C7'
    };

    let colorHex = null;
    for (const [key, color] of Object.entries(territoryColors)) {
        if (window.location.pathname.includes(`/territoires/${key}`)) {
            colorHex = color;
            break;
        }
    }

    if (colorHex) {
        document.documentElement.style.setProperty('--territory-color', colorHex);
        
        // Convert hex to rgb for background (approx 12% opacity to match the previous pink #FCEAEB)
        const r = parseInt(colorHex.slice(1, 3), 16);
        const g = parseInt(colorHex.slice(3, 5), 16);
        const b = parseInt(colorHex.slice(5, 7), 16);
        document.documentElement.style.setProperty('--territory-bg-color', `rgba(${r}, ${g}, ${b}, 0.12)`);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const h1 = document.querySelector('h1');
        const h1Span = document.querySelector('h1 span');
        if (h1 && h1Span) {
            h1.innerHTML = h1Span.innerHTML;
        }
    });
    import("./territoires/featuredVideo.js");
};