import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getLogin } from "../services/api";
import { authApiSlice } from "./authApiSlice";

export const loginAsync = createAsyncThunk(
    "auth/login",
    async ({ email, password }) => {
        const response = await authApiSlice.endpoints.login({
            email, password
        }).unwrap();
        return response;
    });

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        isLoggedIn: false,
    },
    reducers: {
        setCredentials: (state, action) => {
            const { accessToken } = action.payload;
            console.log('Credentials set:', { accessToken });
            state.token = accessToken;
        },
        logOut: (state) => {
            state.user = null
            state.token = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.accessToken;
                state.isLoggedIn = true;
            })
    }
})
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer;
