import { createSlice } from "@reduxjs/toolkit"
const loginSlice = createSlice({
    name: "connexion",
    inialState: {
        name: "connexion",
        password: ''
    },
    // le reducer fusionne les stats les réduits
    reducers: {
        //action (objet) {type 'string', payload 'info recupéré dans la db'}
        sendName(state, action) => {
    state.name = action.payload
},
sendPassword(state, action) => {
    state.password = action.payload
}

    }

})

export const mainStore = configureStore({
    reducers: {
        connexion: loginSlice.reducer
    }

})