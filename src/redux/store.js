import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import userReducer from "./userSlice";
import { apiSlice } from "../app/api/apiSlice";
import accountReducer from "./accountSlice";

export const mainStore = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        user: userReducer,
        account: accountReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

