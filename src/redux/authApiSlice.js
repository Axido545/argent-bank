import { apiSlice } from '../app/api/apiSlice'
import { setProfile, setNoProfil } from './userSlice';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: 'user/login',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {
                    email: credentials.email,
                    password: credentials.password,
                },
            })
        }),
        getUserProfile: builder.query({
            queryFn: async ({ token }) => {
                const response = await fetch('user/profile', {
                    methode: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message);
                }

                return response.json();

            },
            onSuccess: (result, { dispatch, queryFulFilled }) => {
                const { firstName, lastName } = result.body;

                if (firstName && lastName) {
                    dispatch(setProfile({ firstName, lastName }))
                } else {
                    dispatch(setNoProfil("Aucun profil trouvé"))
                }
                queryFulFilled(result)
            }
        })
    }),
});

export const {
    useLoginMutation,
    useGetUserProfileQuery,
} = authApiSlice;