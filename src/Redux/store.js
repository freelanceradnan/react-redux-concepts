import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/Counters/counterSlice'
import postReducer from '../Features/postSlice'
import { apiSlice } from "../Features/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

//coustom middleware
// const myLogger=(store)=>(next)=>(action)=>{
// console.log(JSON.stringify(action))
// console.log(JSON.stringify(store.getState()))
// return next(action)
// }
export const store=configureStore({
    
    reducer:{
        counters:counterReducer,
        
        posts:postReducer,
        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware:(getDefaultMiddlewares)=>getDefaultMiddlewares().concat(apiSlice.middleware),
    
})
//refetch on other focus or reconnect
setupListeners(store.dispatch)
