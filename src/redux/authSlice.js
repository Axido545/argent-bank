import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        loading: false,
        error: null,
    },
    reducers: {}

})

export default authSlice.reducer;