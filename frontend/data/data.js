export const fetchData = async () => {
    try {
        const data = await fetch("http://localhost:3900/users")
            .then(response => response.json());
        return data;
    }
    catch (error) {
        throw new Error("Has been an error trying to bring data from server");
    }
};
