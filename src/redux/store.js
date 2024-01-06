import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import { apiSlice } from "../app/api/apiSlice";


export const mainStore = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleweare: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});