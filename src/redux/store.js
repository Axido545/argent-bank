import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import userReducer from "./userSlice";

export const mainStore = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    },
    devTools: true
});

