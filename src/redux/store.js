import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./forms.js" 

export const store = configureStore({
    reducer:{
        forms:formReducer
    }
})