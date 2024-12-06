function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let w = window.innerWidth;
let h = window.innerHeight; 
let cookieButton = document.querySelector("#Click");
let change_opacity = document.querySelector("#opacity");
let change_opacity2 = document.querySelector("#opacity2");
let nbClicks = 0;
let clickL = 0;
let clickT = 0;
let clickSize = 0;
cookieButton.style.opacity = 1;
change_opacity.style.opacity = 1;
change_opacity.style.opacity = 1;


change_opacity2.style.fontSize = 100 + "px";

change_opacity.style.left = w/2 + "px";
change_opacity.style.top = h/2  + "px";


change_opacity2.addEventListener('click', () => {
  change_opacity.style.opacity = 1;
  change_opacity2.style.display = "none";
})

change_opacity.addEventListener('click', () => {
  cookieButton.style.opacity = 1;
  change_opacity.style.opacity -= 0.35;
  change_opacity.style.display = "none";
});

cookieButton.addEventListener('click', () => {
  if (nbClicks % 10 == 0){
    clickT = getRandomInt(h)+100;
    clickL = getRandomInt(w)+100;
    cookieButton.style.left = clickL + "px";
    cookieButton.style.top = clickT + "px";
    clickSize = getRandomInt(90) + 10;
    cookieButton.style.fontSize = clickSize + "px";
    cookieButton.style.position = "absolute";
  } else {
    cookieButton.style.color = "red";
    cookieButton.style.opacity -=0.1;
    if (cookieButton.style.opacity <= 0 && change_opacity.style.opacity <= 0){
      document.querySelector("#opacity2").style.display = "";
    } else{
      change_opacity.style.display = "none";
    }
    if (cookieButton.style.opacity <= 0){
      change_opacity.style.display = "";
    }
    clickSize = getRandomInt(90) + 10;
    cookieButton.style.fontSize = clickSize + "px";
      if (getRandomInt(2)){
        clickT += clickSize;
      } else{
        clickT -= clickSize;
      }
      if (getRandomInt(2)){
        clickL += clickSize;
      } else{
        clickL -= clickSize;
      }
    cookieButton.style.left = clickL + "px";
    cookieButton.style.top = clickT + "px";
  }
  nbClicks++;
})
