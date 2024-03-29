import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postLogin } from "../services/api";

export const loginAsync = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await postLogin(email, password);

            if (!response.ok) {
                if (response.status === 400) {
                    let errorMessage = "Identifiant ou mot de passe incorrect";
                    throw new Error(errorMessage);
                }
            }
            return response.body;
        } catch (error) {
            return rejectWithValue(error.message || "Une erreur est survenue")
        }
    });

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        error: "",
    },
    reducers: {
        resetAuth: (state) => {
            state.token = null;
            state.error = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.error = "";
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.token = null;
                state.error = action.payload || "Une erreur est survenue";
            })
    }
})

export const { resetAuth } = authSlice.actions;

export default authSlice.reducer;
