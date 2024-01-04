import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLogin } from "../services/api";

export const loginAsync = createAsyncThunk("auth/login", async ({ email, password }) => {
    const response = await getLogin(email, password);
    return response.body;
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        loading: false,
        error: null,
    },
    reducers: {}

})

export default authSlice.reducer;