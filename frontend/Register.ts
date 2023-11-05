export class Register {
  private user: any = {
    userName: "",
    email: "",
    password: "",
  };

  constructor(user: any) {
    this.user = user;
  }

  async addNewUser(): Promise<void> {
    console.log("wiejfwef");
    const add = await fetch("http://localhost:3900/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.user),
    });
  }
}
