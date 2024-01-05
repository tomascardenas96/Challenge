import { Authentication } from "../../api/login.js";
import { Redirect } from "../../api/redirect.js";

const logOutBtn = document.getElementById("log-out") as HTMLDListElement;

const user = new Authentication();
const redirect = new Redirect();

logOutBtn.addEventListener("click", () => {
  user.logOut();
});

redirect.redirectToLogin();
