import "./theme/";

// HOMEPAGE
if (window.location.pathname === "/") {
    import("./home/sliderContent")
    import("./home/grabToScroll");
};

// PAGE VIDEO
if (window.location.pathname === "/video/") {
    import("./pageVideo/main.js");
};