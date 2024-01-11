export const apiUrl = "http://localhost:3001/api/v1/user/login"

export async function postLogin(email, password) {
    return fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
        .then(response => response.json())
}


export const apiProfile = "http://localhost:3001/api/v1/user/profile";

export async function postProfile(token) {
    console.log("postProfile token:", token);

    try {
        const response = await fetch(apiProfile, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer" + token,
            },
        });

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Non autorisé");
            }

            // si d'autres erreurs
            throw new Error(`HTTP erreur! Status: ${response.status}`);
        }
        return response.json();

    } catch (error) {
        // erreurs au cours du fetch
        console.error("Error lors de la récupération de l'utilisateur:", error.message);
        throw error;
    }
}

export const getToken = () => {
    return localStorage.getItem("token");
};
