import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { firstName: '', lastName: '', error: null },


})


export default userSlice.reducer;
