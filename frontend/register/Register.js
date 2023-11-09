export class Register {
    constructor(user) {
        this.user = user;
    }
    async addNewUser() {
        try {
            const add = await fetch("http://localhost:3900/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.user),
            });
            alert("Account created successfully");
        }
        catch (error) {
            throw new Error("Error trying to create a new account");
        }
    }
}
