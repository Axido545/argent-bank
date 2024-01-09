import { createSlice } from "@reduxjs/toolkit";


const accountSlice = createSlice({
    name: "account",
    initialState: {
        checking: {
            title: "Argent Bank Checking (x8349)",
            amount: "$2,082.79",
            description: "Available Balance",
        },
        saving: {
            title: "Argent Bank Savings (x6712)",
            amount: "$10,928.42",
            description: "Available Balance",

        },
        creditCard: {
            title: "Argent Bank Credit Card (x8349)",
            amount: "$184.30",
            description: "Current Balance",
        }
    },
    reducers: {}
});


export const checkingAccount = (state) => state.account.checking;
export const savingAccount = (state) => state.account.saving;
export const creditCardAccount = (state) => state.account.creditCard;

export default accountSlice.reducer