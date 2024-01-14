import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postProfile, putProfile } from "../services/api";
import { resetAuth } from "./authSlice";

export const profileAsync = createAsyncThunk(
    "user/profile",
    async (token, { rejectWithValue }) => {
        try {

            const userData = await postProfile(token);
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

export const updateProfileAsync = createAsyncThunk(
    "user/updateProfile",
    async ({ token, firstName, lastName }, { rejectWithValue }) => {
        console.log("updateProfileAsync :", token, firstName, lastName)

        try {
            const userData = await putProfile(token, firstName, lastName);
            console.log("putProfile result:", userData);
            if (userData) {
                console.log("userData.body:", userData.body);
            } else {
                console.log("putProfile request failed or returned empty data");
            }

            return {
                userData: userData.body,
                token: token,
            };

        } catch (e) {
            console.e("Erreur lors d'edition JSON :", e);
            return rejectWithValue("");

        }
    }

)

const userSlice = createSlice({
    name: "user",
    initialState: {
        firstName: '',
        lastName: '',
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            state.error = "";
            console.log("Appel de resetAuth");
            resetAuth();
        },
        resetUser: (state) => {
            state.firstName = '';
            state.lastName = '';
            state.error = null;
        },

    },

    extraReducers: (builder) => {
        builder
            .addCase(profileAsync.fulfilled, (state, action) => {
                const { userData } = action.payload;
                state.firstName = userData.firstName || '';
                state.lastName = userData.lastName || '';
                state.error = "";
            })
            .addCase(profileAsync.rejected, (state, action) => {
                state.firstName = action.payload ? action.payload.firstName || '' : '';
                state.lastName = action.payload ? action.payload.lastName || '' : '';
                state.error = action.payload ? action.payload : "Une erreur est survenue";
            })
            .addCase(updateProfileAsync.fulfilled, (state, action) => {
                const { userData } = action.payload;
                state.firstName = userData.firstName || '';
                state.lastName = userData.lastName || '';
                state.error = "";
            })
            .addCase(updateProfileAsync.rejected, (state, action) => {
                state.firstName = action.payload ? action.payload.firstName || '' : '';
                state.lastName = action.payload ? action.payload.lastName || '' : '';
                state.error = action.payload && action.payload.error ? action.payload.error : "Une erreur est survenue";
            });
    }
})
export const { logout, resetUser } = userSlice.actions;

export default userSlice.reducer;
