let couleurVerte = document.querySelector("#vert");
let couleurRouge = document.querySelector("#rouge");
let couleurBleue = document.querySelector("#bleu");
let paragraphe = document.querySelector("#text");
console.log(couleurVerte);

couleurVerte.addEventListener("click", handleClickOnColorV);
couleurRouge.addEventListener("click", handleClickOnColorR);
couleurBleue.addEventListener("click", handleClickOnColorB);



function handleClickOnColorV() {
   cleanColor()
    paragraphe.classList.add("text-green");
}
function handleClickOnColorR() {
    cleanColor()
    paragraphe.classList.add("text-red");
}
function handleClickOnColorB() {
    cleanColor()
    paragraphe.classList.add("text-blue");
}

function cleanColor() {

   paragraphe.classList.remove("text-blue","text-red", "text-green" ); 
}






