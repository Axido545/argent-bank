import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLogin } from "../services/api";

export const loginAsync = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await getLogin(
                email, password
            )
            return response.body;
        } catch (error) {
            rejectWithValue(error.message)
        }
    });

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        error: "",
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.error = "";
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.token = null;
                state.error = action.payload
            })
    }
})

export default authSlice.reducer;
