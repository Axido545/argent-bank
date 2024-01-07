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
        isLoggedIn: false,
        // loading: false,
        // error: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            console.log("login success")
            state.token = action.payload.token;
            state.isAuthenticated = true
        },
        loginFailed: (state, action) => {
            state.token = null;
            state.isAuthenticated = false


        },
        setCredentials: (state, action) => {
            const { user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
        },
        setLoggedIn: (state) => {
            state.isLoggedIn = true;
        },
        setLoggedOut: (state) => {
            state.isLoggedIn = false;
        }

    }

})
export const { setLoggedIn, setLoggedOut } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token