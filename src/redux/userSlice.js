import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiProfile, getToken } from "../services/api";

export const profileAsync = createAsyncThunk(
    "user/profile",
    async (_, { rejectWithValue }) => {
        try {
            const token = getToken();
            console.log(getToken())
            const payload = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await fetch(apiProfile, payload);

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error("Non autorisé");
                }

                // si d'autres erreurs
                throw new Error(`HTTP erreur! Status: ${response.status}`);
            }

            const userData = await response.json();

            return {
                userData: userData.body,
                token: token,
            };
        } catch (e) {
            return rejectWithValue("");
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        firstName: '',
        lastName: '',
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(profileAsync.fulfilled, (state, action) => {
                console.log("Fulfilled action payload:", action.payload);

                const { userData, token } = action.payload;
                console.log("User Data:", userData);
                console.log("Token:", token);

                state.firstName = action.payload.firstName || '';
                state.lastName = action.payload.lastName || '';
                state.error = "";
            })
            .addCase(profileAsync.rejected, (state, action) => {
                state.firstName = action.payload ? action.payload.firstName || '' : '';
                state.lastName = action.payload ? action.payload.lastName || '' : '';
                state.error = action.payload ? action.payload : "Une erreur est survenue";
            })
    }
})

export default userSlice.reducer;
