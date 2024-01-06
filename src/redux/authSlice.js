import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLogin } from "../services/api";

export const loginAsync = createAsyncThunk("auth/login", async ({ email, password }) => {
    const response = await getLogin(email, password);
    return response.body;
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        // loading: false,
        // error: null,
    },
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessTocken } = action.payload
            state.user = user
            state.token = accessTocken
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
        }

    }

})

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token