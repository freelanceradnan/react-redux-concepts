
import { createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"



export const apiSlice=createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000"
    }),
    //api call after other page going
    refetchOnFocus:true,
    //api call after 5 sec
    // keepUnusedDataFor:5,
    //
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (limit) => `/posts`,
             
        }),
    }),
})
export const {useGetPostsQuery}=apiSlice