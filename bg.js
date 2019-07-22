const body = document.querySelector("body");
const IMG_NUM = 18;

function paintImage(num){
    const image = new Image();
    image.src = `image/${num}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const ramdon = Math.ceil(Math.random() * IMG_NUM);
    return ramdon;
}

function init(){
    const randNum = genRandom();
    paintImage(randNum);
}

init();