const images = ["01.png","02.png","03.png","04.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
const pic = "pic";
const imgpic = document.querySelector("#quote");


function photoImg(){
    bgImage.classList.add(pic);
    bgImage.src = `img/${chosenImage}`;
    imgpic.appendChild(bgImage);
}

photoImg();