import { Authentication } from "./api/login.js";
import { Redirect } from "./api/redirect.js";
const signUpForm = document.getElementById("sign-up__form");
const logInForm = document.getElementById("log-in__form");
// Pantalla de carga: Muestra un spinner de loading mientras el script no este 100% cargado.
document.addEventListener("DOMContentLoaded", function () {
    const loadScreen = document.getElementById("pantalla-carga");
    loadScreen.style.display = "none";
    // Cuando carga el contenido, muestra la pantalla principal.
    const mainScreen = document.getElementById("contenido-principal");
    mainScreen.style.display = "block";
});
const user = new Authentication();
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const signUpEmail = signUpForm.email.value;
    const signUpUserName = signUpForm.userName.value;
    const signUpPassword = signUpForm.password.value;
    const newUser = {
        userName: signUpUserName,
        email: signUpEmail,
        password: signUpPassword,
    };
    user.register(newUser);
    setTimeout(() => {
        window.location.reload();
    }, 300);
});
logInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const logInEmail = logInForm.email.value;
    const logInPassword = logInForm.password.value;
    const userVerify = {
        email: logInEmail,
        password: logInPassword,
    };
    user.login(userVerify);
    setTimeout(() => {
        window.location.reload();
    }, 300);
});
const redirect = new Redirect();
redirect.redirectToProfile();
