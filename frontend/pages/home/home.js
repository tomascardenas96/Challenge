import { fetchData } from "../../data/data.js";
export class Home {
    constructor() { }
    async bringData() {
        const usersData = await fetchData();
        return usersData;
    }
    async checkUserLoggedIn() {
        const allUsers = await this.bringData();
        const foundUser = allUsers.find((user) => user.isLoggedIn === true);
        return foundUser;
    }
    async greetUser() {
        const spanUserName = document.getElementById("user-name");
        const nameToGiveGreets = (await this.checkUserLoggedIn()).userName;
        spanUserName.innerText = `${nameToGiveGreets}`;
    }
    async logOut() {
        const logOutBtn = document.getElementById("log-out");
        const userCurrentlyLoggedIn = await this.checkUserLoggedIn();
        const foundUser = { ...userCurrentlyLoggedIn, isLoggedIn: false };
        logOutBtn.addEventListener("click", async () => {
            await fetch(`http://localhost:3900/users/${foundUser.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(foundUser),
            });
        });
    }
    async redirect() {
        if (!await this.checkUserLoggedIn()) {
            window.location.href = "/frontend";
        }
    }
}
const homePage = new Home();
homePage.greetUser();
homePage.logOut();
homePage.redirect();
