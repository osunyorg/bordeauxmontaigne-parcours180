const temoignages = document.querySelector(
  ".block-class-decouvrir-des-videos-de-temoignages",
);
if (!temoignages) return;
temoignages.style.scrollBehavior = "smooth";
const outil = document.querySelector(
  ".block-class-qu-est-ce-que-la-plateforme",
);
const utilisation = document.querySelector(".block-class-comment-l-utiliser");
const nous = document.querySelector(".block-class-qui-sommes-nous");
temoignages.id = "acceder-aux-videos-de-temoignages";
outil.id = "un-outil-d-orientation";
utilisation.id = "guide-d-utilisation";
nous.id = "qui-sommes-nous";
