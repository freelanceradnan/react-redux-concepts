
import { createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"



export const apiSlice=createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000"
    }),
    tagTypes:['posts'],
    //api call after other page going
    // refetchOnFocus:true,
    //api call after 5 sec
    // keepUnusedDataFor:5,
    //api call after reconnection
    refetchOnReconnect:true,
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (limit) => `/posts`,
            providesTags:['posts']
        }),
        addPosts:builder.mutation({
            query:(data)=>({
                url:`/posts`,
                method:"POST",
                body:data
            }),
            invalidatesTags:['posts']
        })
    }),
})
export const {useGetPostsQuery,useAddPostsMutation}=apiSlice