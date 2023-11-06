import { fetchData } from "../data/data.js";
export class Login {
    constructor(user) {
        this.user = user;
        this.isLoggedIn = false;
    }
    async authAccess() {
        const usersData = await fetchData();
        const matchingData = usersData.find((entity) => entity.email === this.user.email &&
            entity.password === this.user.password);
        if (matchingData) {
            this.isLoggedIn = true;
        }
        else {
            alert("Email or password incorrect, please try again.");
        }
    }
    goHome() {
        this.isLoggedIn ? window.location.href = "/frontend/home.html" : window.location.href = "/frontend";
    }
}
