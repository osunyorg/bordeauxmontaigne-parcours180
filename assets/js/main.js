import "./theme/";

// HOMEPAGE
if (window.location.pathname === "/") {
    import("./home/grabToScroll");
};

// PAGE VIDEO
if (window.location.pathname === "/video/") {
    import("./pageVideo/main.js");
};