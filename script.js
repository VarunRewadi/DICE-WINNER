var random1 = Math.floor(Math.random()*6)+1;
var image1 = "./images/dice"+random1+".png";
document.querySelectorAll("img")[0].setAttribute("src", image1);

var random2 = Math.floor(Math.random()*6)+1;
var image2 = "./images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src", image2);


if(random1>random2){
    document.querySelector("h1").textContent = "PLAYER 1 WINS";
}else if(random2>random1){
    document.querySelector("h1").textContent = "PLAYER 2 WINS";
}else{
    document.querySelector("h1").textContent = "TIE";
}


console.log(image1);
console.log(image2);