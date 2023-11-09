import { UsersDTO } from "../users/Users.dto";

export class Register {
  private user: UsersDTO;

  constructor(user: UsersDTO) {
    this.user = user;
  }

  async addNewUser(): Promise<void> {
    try {
      const add = await fetch("http://localhost:3900/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.user),
      });
      alert("Account created successfully");
    } catch(error) {
      throw new Error("Error trying to create a new account")
    }
  }
}