export class Redirect {
  private readonly token: string | null = null;

  constructor() {
    this.token = localStorage.getItem("token");
  }

  private isAuth(): boolean {
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
