

function affichageLettre(image1, lettre, timbre){
  let zoomed_on_baleine = false;
  image1.addEventListener('click', () =>{
    if (zoomed_on_baleine){
      zoomed_on_baleine = false;
      lettre.classList.toggle('anim');
      timbre.classList.toggle('anim');
      timbre.style.display = "none";
      lettre.style.display = "none";
    }else{
      zoomed_on_baleine = true;
      lettre.classList.toggle('anim');
      timbre.classList.toggle('anim');
      timbre.style.display = "";
      lettre.style.display = "";
    }
  })
}

let baleine = document.querySelector("#Ibaleine");
let lettreBaleine = document.querySelector("#lettreBaleine");
let timbreBaleine = document.querySelector("#timbreBaleine");

affichageLettre(baleine, lettreBaleine, timbreBaleine);

let dechet = document.querySelector("#Idechet");
let lettreDechet = document.querySelector("#lettreDechet");
let timbreDechet = document.querySelector("#timbreDechet");

affichageLettre(dechet, lettreDechet, timbreDechet);

let algue = document.querySelector("#Ialgue");
let lettreAlgue = document.querySelector("#lettreAlgue");
let timbreAlgue = document.querySelector("#timbreAlgue");

affichageLettre(algue, lettreAlgue, timbreAlgue);

let biome = document.querySelector("#Ibiome");
let lettreBiome = document.querySelector("#lettreBiome");
let timbreBiome = document.querySelector("#timbreBiome");

affichageLettre(biome, lettreBiome, timbreBiome);
