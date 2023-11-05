export class Register {
    constructor(user) {
        this.user = {
            userName: "",
            email: "",
            password: "",
        };
        this.user = user;
    }
    async addNewUser() {
        console.log("wiejfwef");
        const add = await fetch("http://localhost:3900/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.user),
        });
    }
}
