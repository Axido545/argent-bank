import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { firstName: '', lastName: '', error: null },
    reducers: {
        setProfile: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.error = null;
        },
        setNoProfil: (state, action) => {
            state.error = action.payload
        },
        resetUserState: (state) => {
            return { ...state, firstName: '', lastName: '', error: null };
        },
    }

})

export const { setProfile, setNoProfil, resetUserState } = userSlice.actions;

export default userSlice.reducer;
