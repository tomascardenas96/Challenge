import { fetchData } from "../../data/data.js";
import { UsersInterface } from "../../users/Users.interface.js";

export class Home {
  constructor() {}

  // Bring data of users from data file (fetch from backend)
  private async bringData(): Promise<any> {
    const usersData: UsersInterface[] = await fetchData();
    return usersData;
  }

  // This function verify if some user is logged in, returning full object.
  private async checkUserLoggedIn() {
    const allUsers = await this.bringData();
    const foundUser = allUsers.find(
      (user: UsersInterface) => user.isLoggedIn === true
    );
    return foundUser;
  }

  // Greet user by his user name.
  async greetUser() {
    const h1UserName = document.getElementById(
      "user-name"
    ) as HTMLSpanElement;
    const nameToGiveGreets = (await this.checkUserLoggedIn()).userName;
    h1UserName.innerText = `${nameToGiveGreets}`;
  }

  // Log out user, this function modify data arrived from server, changing his boolean value.
  // Also create a local storage value to work through updated data.   
  async logOut() {
    const logOutBtn = document.getElementById("log-out") as HTMLButtonElement;
    const userCurrentlyLoggedIn = await this.checkUserLoggedIn();
    const foundUser = { ...userCurrentlyLoggedIn, isLoggedIn: false };

    logOutBtn.addEventListener("click", async () => {
      try {
        await fetch(`http://localhost:3900/users/${foundUser.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(foundUser),
        });
        localStorage.setItem("userIsLogged", "false");
      } catch (error) {
        throw new Error("Error trying to log out");
      }
    });
  }

  // Here it is verified if there some logged in user or not.
  // In negative case, will redirect to login page.
  async redirect() {
    if (!(await this.checkUserLoggedIn())) {
      window.location.href = "/frontend";
    }
  }
}

// Is is created an instance of Home class.
const homePage = new Home();

homePage.greetUser();
homePage.logOut();
homePage.redirect();
