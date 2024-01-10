import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import userReducer from "./userSlice";
import accountReducer from "./accountSlice";

export const mainStore = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        account: accountReducer,
    },
    devTools: true
});

