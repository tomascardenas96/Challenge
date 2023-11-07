import { fetchData } from "../data/data.js";
export class Login {
    constructor(user) {
        this.user = user;
    }
    async authAccess() {
        const usersData = await fetchData();
        const matchingData = usersData.find((entity) => entity.email === this.user.email &&
            entity.password === this.user.password);
        if (matchingData) {
            const foundUser = { ...matchingData, isLoggedIn: true };
            await fetch(`http://localhost:3900/users/${foundUser.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(foundUser),
            });
            localStorage.setItem("userIsLogged", "true");
            return true;
        }
        else {
            alert("Email or password incorrect, please try again.");
            return false;
        }
    }
    static goHome() {
        const isAuthorized = localStorage.getItem("userIsLogged");
        isAuthorized === "true"
            ? (window.location.href = "/frontend/pages/home/home.html")
            : null;
    }
}
