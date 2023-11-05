import { Register } from "./Register.js";
import { SignUpFormInterface } from "./register/Form.interface.js";

const signUpForm = document.getElementById("sign-up__form") as HTMLFormElement &
  SignUpFormInterface;

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

  const testUser: Register = new Register(newUser);
  try {
    await testUser.addNewUser();
  } catch (error) {
    throw new Error();
  }
});
