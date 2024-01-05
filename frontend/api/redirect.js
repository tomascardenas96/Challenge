export class Redirect {
    constructor() {
        this.token = null;
        this.token = localStorage.getItem("token");
    }
    isAuth() {
        return this.token !== null && this.token !== undefined;
    }
    redirectToProfile() {
        if (this.isAuth()) {
            window.location.href = "/frontend/pages/home/home.html";
        }
    }
}
