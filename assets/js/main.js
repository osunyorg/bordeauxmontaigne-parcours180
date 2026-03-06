import "./theme/";

// HOMEPAGE
if (window.location.pathname === "/") {
    import("./grabToScroll");
};

// PAGE VIDEO
if (window.location.pathname === "/video/") {
    import("./pageVideo/main.js");
};