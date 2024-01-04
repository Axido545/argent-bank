const apiUrl = "http://localhost:3001/api/v1/user/login"

export function getLogin(email, password) {
    return fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
        .then(res => {
            if (!res.ok) {
                throw new Error(`Erreur HTTP! Statut: ${res.status}`);
            }
            return res.json();
        })
        .catch(error => {
            console.error('Erreur lors de la requête:', error);
            throw error;
        });
}
