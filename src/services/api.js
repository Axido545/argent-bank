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

    try {
        const response = await fetch(apiProfile, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        });

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Non autorisé");
            }
            else if (response.status === 400) {
                throw new Error("Identifiant ou mot de passe incorrect");
            } else {
                // si d'autres erreurs
                throw new Error(`HTTP erreur! Status: ${response.status}`);
            }


        }
        return response.json();

    } catch (error) {
        // erreurs au cours du fetch
        console.error("Error lors de la récupération de l'utilisateur:", error.message);
        throw error;
    }
}


export async function putProfile(token, editFirstName, editLastName) {
    console.log("putProfile token:", token, editFirstName, editLastName);

    try {
        const response = await fetch(apiProfile, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify({ firstName: editFirstName, lastName: editLastName }),
        });
        return response.json();

    } catch (error) {
        // erreurs au cours du fetch
        console.error("Error lors de l'édition de l'utilisateur:", error.message);
        throw error;
    }

}