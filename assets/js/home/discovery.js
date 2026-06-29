const discoveries = document.querySelector(
  ".block-class-les-videos-a-la-une .container .block-content .testimonials",
).children;

const pageBlock = document.querySelector(".block-class-decouverte-aleatoire");
pageBlock.style.display = "none";

const pages = document.querySelectorAll(
  ".block-class-decouverte-aleatoire .pages > *",
);

// Define the Murmur3Hash function
function MurmurHash3(string) {
  let i = 0;
  for (i, hash = 1779033703 ^ string.length; i < string.length; i++) {
    let bitwise_xor_from_character = hash ^ string.charCodeAt(i);
    hash = Math.imul(bitwise_xor_from_character, 3432918353);
    hash = (hash << 13) | (hash >>> 19);
  }
  return () => {
    // Return the hash that you can use as a seed
    hash = Math.imul(hash ^ (hash >>> 16), 2246822507);
    hash = Math.imul(hash ^ (hash >>> 13), 3266489909);
    return (hash ^= hash >>> 16) >>> 0;
  };
}

function SimpleFastCounter32(seed_1, seed_2, seed_3, seed_4) {
  return () => {
    seed_1 >>>= 0;
    seed_2 >>>= 0;
    seed_3 >>>= 0;
    seed_4 >>>= 0;
    let cast32 = (seed_1 + seed_2) | 0;
    seed_1 = seed_2 ^ (seed_2 >>> 9);
    seed_2 = (seed_3 + (seed_3 << 3)) | 0;
    seed_3 = (seed_3 << 21) | (seed_3 >>> 11);
    seed_4 = (seed_4 + 1) | 0;
    cast32 = (cast32 + seed_4) | 0;
    seed_3 = (seed_3 + cast32) | 0;
    return (cast32 >>> 0) / 4294967296;
  };
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

let generate_seed = MurmurHash3(today);
let random_number = SimpleFastCounter32(generate_seed(), generate_seed());

for (i = 0; i < discoveries.length; i++) {
  const rand = Math.round(random_number() * pages.length);
  const video = pages[rand];
  const discovery = discoveries[i];

  //title
  let title = video.querySelector(".page-title a").innerHTML;
  const discoveryTitle = discovery.querySelector("figcaption p .signature");
  title = title.split(",")[0].trim();
  title = "Découvrez le témoignage de " + title;
  discoveryTitle.innerHTML = title;

  //quote
  const quote = video.querySelector("article hgroup .page-subtitle").innerHTML;
  const discoveryQuote = discovery.querySelector("blockquote p");
  discoveryQuote.innerHTML = quote;

  //image
  const image = video.querySelector("article .media img").getAttribute("src");
  const discoveryImage = discovery.querySelector("figcaption picture");
  discoveryImage.querySelectorAll("source").forEach((source) => {
    source.srcset = image;
  });

  //link
  const link = video.querySelector("a");
  console.log(link);
  const discorveryLink = document.createElement("a");
  discorveryLink.href = link.href;
  discovery.append(discorveryLink);

  const figure = discovery.querySelector("figure");
  const figCaption = discovery.querySelector("figcaption");
  figure.append(discorveryLink);
  discorveryLink.append(figCaption);
}
