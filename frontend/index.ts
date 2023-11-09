import { Register } from "./register/Register.js";
import { Login } from "./login/Login.js";
import { SignUpFormInterface } from "./register/Form.interface.js";
import { LogInFormInterface } from "./login/Login.interface.js";
import { UsersInterface } from "./users/Users.interface.js";
import { UsersDTO } from "./users/Users.dto.js";

const signUpForm = document.getElementById("sign-up__form") as HTMLFormElement &
  SignUpFormInterface;
const logInForm = document.getElementById("log-in__form") as HTMLFormElement &
  LogInFormInterface;

// Function that allows to sign up a new user. It is created a new instance from Register class
// With given data of final user.
signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const signUpEmail: string = signUpForm.email.value;
  const signUpUserName: string = signUpForm.userName.value;
  const signUpPassword: string = signUpForm.password.value;

  const newUser: UsersInterface = {
    userName: signUpUserName,
    email: signUpEmail,
    password: signUpPassword,
    isLoggedIn: false
  };

  const testUser: Register = new Register(newUser);
  try {
    await testUser.addNewUser();
  } catch (error) {
    throw new Error("Has ocurred an error in sign up request, please try again.");
  }
});

// Function made to grant access.
logInForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const logInEmail: string = logInForm.email.value;
  const logInPassword: string = logInForm.password.value;

  const userData: UsersDTO = {
    email: logInEmail,
    password: logInPassword,
    isLoggedIn: true
  };

  const userAccess: Login = new Login(userData);
  try{
    await userAccess.authAccess();
  } catch(error) {
    throw new Error("Has ocurred an error while login, please try again.")
  }
});

// Static function used for redirect automatically to home if it's required.
Login.goHome();
