import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile } from "../services/api";

export const getProfileAsync = createAsyncThunk(
    "user/profile",
    async ({ firstName, lastName }, { rejectWithValue }) => {
        try {
            const response = await getProfile(
                firstName, lastName
            )
            return response.body;
        } catch (error) {
            rejectWithValue(error.message)
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
            .addCase(getProfileAsync.fulfilled, (state, action) => {
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.error = "";
            })
            .addCase(getProfileAsync.rejected, (state, action) => {
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.error = action.payload
            })
    }

})


export default userSlice.reducer;
