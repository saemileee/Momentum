const rightContainerElem = document.querySelector("#right-container");
const images = ["01.png", "02.png", "03.PNG"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

bgImage.classList.add("bg_img");

rightContainerElem.appendChild(bgImage);
