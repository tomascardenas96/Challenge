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
            // Redirigir a la URL deseada
            window.location.href = "/frontend/pages/home/home.html";
        }
        else {
            console.log('Inicio de sesión fallido. No se realizará la redirección.');
        }
    }
}
