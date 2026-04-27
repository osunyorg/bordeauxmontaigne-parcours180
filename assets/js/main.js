import "./theme/";

// HOMEPAGE
if (window.location.pathname === "/") {
    import("./home/grabToScroll");
};

// PAGE VIDEO
if (window.location.pathname.includes("/les-videos/")) {
    import("./pageVideo/main.js");
};