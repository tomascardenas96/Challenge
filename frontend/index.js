import { Register } from "./Register.js";
const signUpForm = document.getElementById("sign-up__form");
// Function that allows to sign up a new user.
signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const signUpEmail = signUpForm.email.value;
    const signUpUserName = signUpForm.userName.value;
    const signUpPassword = signUpForm.password.value;
    const newUser = {
        userName: signUpUserName,
        email: signUpEmail,
        password: signUpPassword,
    };
    const testUser = new Register(newUser);
    try {
        await testUser.addNewUser();
    }
    catch (error) {
        throw new Error();
    }
});
