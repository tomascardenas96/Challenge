import { Register } from "./register/Register.js";
import { Login } from "./login/Login.js";
const signUpForm = document.getElementById("sign-up__form");
const logInForm = document.getElementById("log-in__form");
// Function that allows to sign up a new user. It is created a new instance from Register class
// With given data of final user.
signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const signUpEmail = signUpForm.email.value;
    const signUpUserName = signUpForm.userName.value;
    const signUpPassword = signUpForm.password.value;
    const newUser = {
        userName: signUpUserName,
        email: signUpEmail,
        password: signUpPassword,
        isLoggedIn: false
    };
    const testUser = new Register(newUser);
    try {
        await testUser.addNewUser();
    }
    catch (error) {
        throw new Error("Has ocurred an error in sign up request, please try again.");
    }
});
// Function made to grant access.
logInForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const logInEmail = logInForm.email.value;
    const logInPassword = logInForm.password.value;
    const userData = {
        email: logInEmail,
        password: logInPassword,
    };
    const userAccess = new Login(userData);
    try {
        await userAccess.authAccess();
    }
    catch (error) {
        throw new Error("Has ocurred an error while login, please try again.");
    }
});
// Static function used for redirect automatically to home if it's required.
Login.goHome();
