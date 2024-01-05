export class Authentication {
    login(user) {
        try {
            fetch("http://localhost:3090/api/v1/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            })
                .then((response) => response.json())
                .then((data) => {
                if (data.message === "success") {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("userName", data.userName);
                }
                else {
                }
            });
        }
        catch (error) { }
    }
    logOut() {
        localStorage.removeItem("token");
        setTimeout(() => {
            window.location.reload();
        }, 300);
    }
    register(user) {
        try {
            fetch("http://localhost:3090/api/v1/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            }).then((response) => response.json());
        }
        catch (error) { }
    }
}
