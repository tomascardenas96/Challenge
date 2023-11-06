import { fetchData } from "../data/data.js";
import { UsersInterface } from "../users/Users.interface.js";
import { UsersDTO } from "../users/Users.dto.js";

export class Login {
  private user: UsersDTO;

  constructor(user: UsersDTO) {
    this.user = user;
  }

  async authAccess(): Promise<boolean> {
    const usersData = await fetchData();
    const matchingData = usersData.find(
      (entity) =>
        entity.email === this.user.email &&
        entity.password === this.user.password
    );
    if (matchingData) {
      const objeto = { ...matchingData, isLoggedIn: true };
      await fetch(`http://localhost:3900/users/${objeto.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(objeto),
      });
      return true;
    } else {
      alert("Email or password incorrect, please try again.");
      return false;
    }
  }

  async goHome(): Promise<void> {
    const isAuthorized = await this.authAccess();
    isAuthorized
      ? (window.location.href = "/frontend/pages/home.html")
      : (window.location.href = "/frontend");
  }
}
