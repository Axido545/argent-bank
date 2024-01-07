import { apiSlice } from '../app/api/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: 'user/login',
                method: 'POST',
                // body: { ...credentials }
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify(credentials),
                body: {
                    email: credentials.email,
                    password: credentials.password,
                },
            })
        })

    })

})

export const {
    useLoginMutation
} = authApiSlice