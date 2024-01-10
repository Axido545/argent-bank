const apiUrl = "http://localhost:3001/api/v1/user/login"

export function getLogin(email, password) {
    return fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
        .then(response => response.json())
}

const apiProfile = "http://localhost:3001/api/v1/user/profile";

export function getProfile(firstName, lastName, token) {
    return fetch(apiProfile, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ firstName, lastName }),
    })
        .then(response => response.json());
}