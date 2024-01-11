import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postProfile } from "../services/api";

export const profileAsync = createAsyncThunk(
    "user/profile",
    async (_, { rejectWithValue, getState }) => {
        try {
            const token = getState().auth.token;
            console.log("Token:", token);
            const response = await postProfile(token);
            return response.body;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    });

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
