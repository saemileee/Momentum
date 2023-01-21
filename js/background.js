const images = ["01.jpg", "02.jpg", "03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img"); //html에 <img> 태그를 넣는다

bgImage.src = `img/${chosenImage}`; // html에 <img src = img/02.jpg>

document.body.appendChild(bgImage);