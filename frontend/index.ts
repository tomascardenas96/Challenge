import { Authentication } from "./api/login.js";
import { Redirect } from "./api/redirect.js";
import {
  LogInFormInterface,
  SignUpFormInterface,
} from "./interface/form.interface.js";
import { LoginInterface } from "./interface/login.interface.js";
import { RegisterInterface } from "./interface/register.interface.js";

const signUpForm = document.getElementById("sign-up__form") as HTMLFormElement &
  SignUpFormInterface;
const logInForm = document.getElementById("log-in__form") as HTMLFormElement &
  LogInFormInterface;

// Pantalla de carga: Muestra un spinner de loading mientras el script no este 100% cargado.
document.addEventListener("DOMContentLoaded", function () {
  const loadScreen = document.getElementById(
    "pantalla-carga"
  ) as HTMLDivElement;
  loadScreen.style.display = "none";

  // Cuando carga el contenido, muestra la pantalla principal.
  const mainScreen = document.getElementById(
    "contenido-principal"
  ) as HTMLDivElement;
  mainScreen.style.display = "block";
});

const user = new Authentication();

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const signUpEmail: string = signUpForm.email.value;
  const signUpUserName: string = signUpForm.userName.value;
  const signUpPassword: string = signUpForm.password.value;

  const newUser: RegisterInterface = {
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

  const logInEmail: string = logInForm.email.value;
  const logInPassword: string = logInForm.password.value;

  const userVerify: LoginInterface = {
    email: logInEmail,
    password: logInPassword,
  };

  user.login(userVerify);
  setTimeout(() => {
    window.location.reload();
  }, 300);
});

const redirect: Redirect = new Redirect();
redirect.redirectToProfile();
