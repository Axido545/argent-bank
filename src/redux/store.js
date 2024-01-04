import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"


export const mainStore = configureStore({
    reducer: {
        auth: authReducer
    },
});