import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postProfile } from "../services/api";

export const profileAsync = createAsyncThunk(
    "user/profile",
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = getState();
            const token = state.auth.token;
            console.log(token);

            const tokenObject = JSON.parse(token);
            const tokenValue = tokenObject.token;
            console.log(tokenValue);
            const userData = await postProfile(tokenValue);
            console.log("postProfile result:", userData);

            if (userData) {
                console.log("userData.body:", userData.body);
            } else {
                console.log("postProfile request failed or returned empty data");
            }

            return {
                userData: userData.body,
                token: token,
            };
        } catch (e) {
            console.e("Erreur lors de la conversion JSON :", e);

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
