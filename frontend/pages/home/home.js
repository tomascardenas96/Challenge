import { Authentication } from "../../api/login.js";
import { Redirect } from "../../api/redirect.js";
// Pantalla de carga: Muestra un spinner de loading mientras el script no este 100% cargado.
document.addEventListener("DOMContentLoaded", function () {
    const loadScreen = document.getElementById("pantalla-carga");
    loadScreen.style.display = "none";
    // Cuando carga el contenido, muestra la pantalla principal.
    const mainScreen = document.getElementById("contenido-principal");
    mainScreen.style.display = "block";
});
const logOutBtn = document.getElementById("log-out");
const userNameHeading = document.getElementById("user-name");
const user = new Authentication();
const redirect = new Redirect();
const userName = localStorage.getItem("userName");
userNameHeading.innerHTML = `${userName}`;
logOutBtn.addEventListener("click", () => {
    user.logOut();
});
redirect.redirectToLogin();
