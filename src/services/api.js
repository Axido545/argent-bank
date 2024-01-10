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
