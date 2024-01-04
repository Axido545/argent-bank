const apiUrl = "http://localhost:3001/api/v1/users/login"

export function getLogin(email, password) {
    return fetch(apiUrl, {
        method: 'POST',
        body: {
            email: email,
            password: password
        },
    })
        .then(res => res.json())
}