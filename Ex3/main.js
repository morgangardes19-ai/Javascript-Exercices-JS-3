let couleurVerte = document.querySelector("#vert");
let couleurRouge = document.querySelector("#rouge");
let couleurBleue = document.querySelector("#bleu");
let colors = document.querySelector(".color")
let paragraphe = document.querySelector("#text");
// console.log(couleurVerte);

couleurVerte.addEventListener("click", handleClickOnColorV);
couleurRouge.addEventListener("click", handleClickOnColorR);
couleurBleue.addEventListener("click", handleClickOnColorB);


// // function handleClickOnColorV() {
//     // console.log(afficher);
// //     paragraphe.classList.remove("color");
// }

function handleClickOnColorV() {
    // console.log(afficher);
    paragraphe.classList.add("vert");
}

