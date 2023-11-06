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
            console.log("Nope");
        }
    }
}
