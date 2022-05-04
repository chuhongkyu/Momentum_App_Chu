const images = ["01.jpg","02.jpg","03.jpg","04.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
const pic = "pic";
const imgpic = document.querySelector(".left_section");


function photoImg(){
    bgImage.classList.add(pic);
    bgImage.src = `img/${chosenImage}`;
    imgpic.appendChild(bgImage);
}

photoImg();