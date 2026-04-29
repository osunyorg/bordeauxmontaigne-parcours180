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