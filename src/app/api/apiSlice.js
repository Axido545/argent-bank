import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { setCredentials, logOut } from "../../redux/authSlice"

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/user/login',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWidhReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result?.error?.originalStatus === 403) {
        console.log('sending refresh token')
        // envoie un nouveau token si ya un nouveau acces token
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        console.log(refreshResult)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            //store le nouveau token
            api.dispatch(setCredentials({ ...refreshResult.data, user }))
            // retry the original query with new acces token
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }

    }
    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWidhReauth,
    endpoints: builder => ({})
})