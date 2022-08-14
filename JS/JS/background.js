const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("style");

bgImage.src = `img/${chosenImage}`;
bgImage.innerText = `body {background-image: url(img/${chosenImage}); background-position: center; background-repeat: no-repeat; height: 100vh; background-size: cover; }`;
document.body.appendChild(bgImage);
