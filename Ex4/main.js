let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let button = document.querySelector("button");
// console.log(confirmPasswordassword);

button.addEventListener("click", handleClickOnButton);

function handleClickOnButton(evenement) {
  cleanColor();
  if (password.value === confirmPassword.value) {
    password.classList.add("mdp-green");
    confirmPassword.classList.add("c-mdp-green");
  } else {
    password.classList.add("mdp-red");
    confirmPassword.classList.add("c-mdp-red");
  }

    button = evenement.target;
}

function cleanColor() {
  password.classList.remove("mdp-green", "mdp-red");
  confirmPassword.classList.remove("c-mdp-green", "c-mdp-red");
}