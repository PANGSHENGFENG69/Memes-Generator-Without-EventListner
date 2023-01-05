var random = Math.floor(Math.random() * 6 )+1
var getPicSource = "image/meme" + random + ".png"
document.querySelectorAll(".img1")[0].setAttribute("src",getPicSource);


var random2 = Math.floor(Math.random() * 6 )+1
var getPicSource = "image/meme" + random2 + ".png"
document.querySelectorAll(".image2")[0].setAttribute("src",getPicSource);

if(random>random2){
    document.querySelector("h1").textContent = "Meme 1 Win!!"
}
else if(random2>random){
    document.querySelector("h1").textContent = "Meme 2 Win!!"
}
else{
    document.querySelector("h1").textContent = "Draw..."
}