import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "profile",
    initialState: { firstName: '', lastName: '', error: null },
    reducers: {
        setProfile: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName,
                state.error = null;
        },
        setNoProfil: (state, action) => {
            state.error = action.payload
        }
    }

})

export const { setProfile, setNoProfil } = userSlice.actions;

export default userSlice.reducer;
