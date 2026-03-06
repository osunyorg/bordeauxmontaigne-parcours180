export const getPageId = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('page');
};

export const stringToArray = (text) => {
    return text.split(',').map(item => item.trim());
};

export const normalizeText = (text) => {
    return text.trim().replace(/[’‘`´]/g, "'");
};