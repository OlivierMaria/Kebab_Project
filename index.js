//------------------------------------------------------------------------
// MouseMove

const mouseMove = document.querySelector(".mousemove");
const navbar = document.querySelector("#navbar");

navbar.addEventListener("mouseenter", () => {
  mouseMove.style.display = "none";
});

navbar.addEventListener("mouseleave", () => {
  mouseMove.style.display = "block";
});

window.addEventListener("mousemove", (e) => {
  mouseMove.style.left = e.pageX + "px";
  mouseMove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//------------------------------------------------------------------------
// Menu
// Optionnel : pour précharger les images
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

images.forEach((image) => {
  const img = new Image();
  img.src = image;
});
//------------------------------------------------------------------------
//DragDrop
let dragSrcEl = null;

function handleDragStart(e) {
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = "move";

  return false;
}

function handleDragEnter(e) {
  this.classList.add("over");
}

function handleDragLeave(e) {
  this.classList.remove("over");
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
  }

  return false;
}

function handleDragEnd(e) {
  const photos = document.querySelectorAll(".photo");
  photos.forEach((photo) => photo.classList.remove("over"));
}

const photos = document.querySelectorAll(".photo");
photos.forEach((photo) => {
  photo.addEventListener("dragstart", handleDragStart, false);
  photo.addEventListener("dragenter", handleDragEnter, false);
  photo.addEventListener("dragover", handleDragOver, false);
  photo.addEventListener("dragleave", handleDragLeave, false);
  photo.addEventListener("drop", handleDrop, false);
  photo.addEventListener("dragend", handleDragEnd, false);
});
//------------------------------------------
//Menu
const mainCourses = [
  "Filet de turbot de la mer Noire",
  "Tablier de sapeur",
  "Gigot d'agneau",
  "Faisan de forêt",
  "Trio de quinoa, chou kale et pousses d'épinard",
];
const techniques = [
  "à la cocotte",
  "minute",
  "avec sa sauce hollandaise",
  "façon sud-ouest",
  "comme chez ma grand-mère",
  "déglacé au saké",
  "maturé en fût de chêne",
];
const sides = [
  "une purée de topinambour",
  "ses frites truffées",
  "des châtaignes croustillantes",
  "une brunoise carotte-cèleri",
  "un oeuf parfait",
  "sa crème veloutée de fromages affinés",
];
const seasonings = [
  "au yuzu rouge",
  "au poivre vert de Sichuan",
  "et une pointe de safran",
  "à l'ail noir",
  "et un peu de sucre en poudre",
];

const getRandom = (data) => data[Math.floor(Math.random() * data.length)];

const generateMenu = () => {
  const menu = `${getRandom(mainCourses)} ${getRandom(
    techniques
  )}, avec ${getRandom(sides)} ${getRandom(seasonings)}`;
  document.getElementById("menu").innerHTML = menu;
};
