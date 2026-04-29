let afficher = document.querySelector("#buttonAfficher");
let masquer = document.querySelector ("#buttonMasquer")
let paragraphe = document.querySelector("#text");
// console.log(paragraphe);


afficher.addEventListener("click", handleClickAfficher);
masquer.addEventListener("click", handleClickMasquer);

function handleClickAfficher() {
    // console.log(afficher);
    paragraphe.classList.remove("hidden");
    
}
function handleClickMasquer() {
    // console.log(afficher);
    paragraphe.classList.add("hidden");
    
}