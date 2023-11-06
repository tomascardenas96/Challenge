export const fetchData = async () => {
    const data = await fetch("http://localhost:3900/users")
        .then(response => response.json());
    return data;
};
