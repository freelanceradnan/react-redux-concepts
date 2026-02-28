import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../Api/postApi";

const initialState={
    isLoading:false,
    isError:false,
    posts:[
        {
            id:1,
            title:"this is last warn",
        }
    ],
    error:null
}
//async thunk function
export const fetchPosts=createAsyncThunk("posts/fetchPost",async()=>{
    const posts=await getPosts()
    return posts
})
const postSlice=createSlice({
    name:"posts",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.pending,(state,action)=>{
        state.isLoading=true,
        state.isError=false
        })
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
        state.isLoading=true,
        state.isError=false,
        state.posts=action.payload
        })
        builder.addCase(fetchPosts.rejected,(state,action)=>{
        state.isLoading=false,
        state.isError=true,
        state.error=action.error?.message||"an error occured"
        })
    }
})
export default postSlice.reducer