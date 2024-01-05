export class Redirect {
    constructor() {
        this.token = null;
        this.token = localStorage.getItem("token");
    }
    isAuth() {
        return this.token !== null && this.token !== undefined;
    }
    redirectToHome() {
        if (this.isAuth()) {
            window.location.href = "/frontend/pages/home/home.html";
            console.log(this.isAuth());
        }
    }
    redirectToLogin() {
        if (!this.isAuth()) {
            console.log(this.isAuth());
            window.location.href = "/frontend/";
        }
    }
}
