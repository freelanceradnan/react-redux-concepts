import { createSlice } from "@reduxjs/toolkit";
import { InitialCounter } from './../../assets/database/InitialCounter';

const countersSlice=createSlice({
    name:"counters",
    initialState:InitialCounter,
    reducers:{
        increment:(state,action)=>{
       const counterIndex = state.findIndex(c=>c.id===action.payload);
       
        state[counterIndex].value++
        
        },

        decrement:(state,action)=>{
        const counterIndex = state.findIndex((c) => c.id === action.payload);
        state[counterIndex].value--
        }
    }
});

export default countersSlice.reducer
export const{increment,decrement}= countersSlice.actions
