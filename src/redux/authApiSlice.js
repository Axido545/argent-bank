import { apiSlice } from '../app/api/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/login',
                methode: 'POST',
                body: { ...credentials }

            })
        })

    })

})