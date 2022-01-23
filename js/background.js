const images = ["0.jpg", "1.jpg", "2.jpg"];
// const images = [
//   "lofi-lofigirl.gif",
//   "lofi-lofigirl2.gif",
//   "lofi-lofigirl3.gif",
//   "lofi-lofigirl4.gif",
// ];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
