// ========== EXERCICE 1 =============
let imageRecup = document.querySelector("#image1")
// console.log(imageRecup);

  imageRecup.addEventListener("mouseover", handleMouseoverOnImage);
    imageRecup.addEventListener("mouseout", handleMouseOutOnImage);


function handleMouseoverOnImage() {
    // console.log(imageRecup);
    imageRecup.classList.add("border-red");
}

function handleMouseOutOnImage() {
    // console.log(imageRecup);
    imageRecup.classList.remove("border-red");
}



//   function handleMouseoverOnImage () {
//     // console.log(imageRecup.src);
//     imageRecup.src = "./image1.jpg"

// }