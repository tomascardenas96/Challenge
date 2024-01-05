export class Redirect {
  private readonly token: string | null = null;

  constructor() {
    this.token = localStorage.getItem("token");
  }

  isAuth(): boolean {
    return this.token !== null && this.token !== undefined;
  }

  redirectToProfile() {
    if (this.isAuth()) {
        // Redirigir a la URL deseada
        window.location.href = "/frontend/pages/home/home.html";
      } else {
        console.log('Inicio de sesión fallido. No se realizará la redirección.');
      }
  }
}
