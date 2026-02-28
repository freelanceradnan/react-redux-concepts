import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/Counters/counterSlice'
import postReducer from '../Features/postSlice'
export const store=configureStore({
    
    reducer:{
        counters:counterReducer,
        
        posts:postReducer
    }
})
