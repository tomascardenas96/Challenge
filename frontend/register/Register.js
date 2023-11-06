export class Register {
    constructor(user) {
        this.user = user;
    }
    async addNewUser() {
        const add = await fetch("http://localhost:3900/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.user),
        });
    }
}
