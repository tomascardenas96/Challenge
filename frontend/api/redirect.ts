export class Redirect {
  private readonly token: string | null = null;

  constructor() {
    this.token = localStorage.getItem("token");
  }

  private isAuth(): boolean {
    return this.token !== null && this.token !== undefined;
  }

  redirectToProfile() {
    if (this.isAuth()) {
        window.location.href = "/frontend/pages/home/home.html";
      }
  }
}
