import { LoginInterface } from "../interface/login.interface";
import { RegisterInterface } from "../interface/register.interface";

export class Authentication {
  login(user: LoginInterface) {
    try {
      fetch("http://localhost:3090/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "success") {
            localStorage.setItem("token", data.token);
            localStorage.setItem("userName", data.userName);
          } else {
          }
        });
    } catch (error) {}
  }

  logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setTimeout(() => {
      window.location.reload();
    },300);
  }

  register(user: RegisterInterface) {
    try {
      fetch("http://localhost:3090/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }).then((response) => response.json());
    } catch (error) {}
  }
}
