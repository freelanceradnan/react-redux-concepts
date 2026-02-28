import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Features/postSlice';


const Posts = () => {
    
    const {isLoading,isError,posts,error}=useSelector(state=>state.posts)
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(fetchPosts())
    },[dispatch])
    let content;
    if(isLoading &&!isError){
        content=<h1>Loading posts....</h1>
    }
    if(isLoading && isError){
        content=<h2 className="text-red-500">{error}</h2>
    }
    if(isLoading && !isError){
    if(posts.length>0){
        content=<ul>{posts.map(post=> <li key={post.id}>{post.title}</li>)}</ul>
    }
    }
    return (
        <div>
            All Posts Here
            {content}
        </div>
    );
};

export default Posts;