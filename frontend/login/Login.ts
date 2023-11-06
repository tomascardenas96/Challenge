import { fetchData } from "../data/data.js";
import { UsersInterface } from "../users/Users.interface.js";

export class Login {
  private user: UsersInterface;
  private isLoggedIn: boolean;

  constructor(user: UsersInterface) {
    this.user = user;
    this.isLoggedIn = false;
  }

  async authAccess() {
    const usersData = await fetchData();
    const matchingData: any = usersData.find(
      (entity) =>
        entity.email === this.user.email &&
        entity.password === this.user.password
    );
    if(matchingData) {
       this.isLoggedIn = true;
    } else {
        alert("Email or password incorrect, please try again.")
    }
  }

  goHome() {
    this.isLoggedIn ?  window.location.href = "/frontend/home.html" :  window.location.href = "/frontend";
  }
}
