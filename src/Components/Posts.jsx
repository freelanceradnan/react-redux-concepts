import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Features/postSlice';
import { useGetPostsQuery } from '../Features/apiSlice';


const Posts = () => {
 
  const { data: posts, isLoading, isSuccess, isError, error } = useGetPostsQuery();

 
  if (isLoading) return <h1>Loading posts....</h1>;

 
  if (isError) return <h2 className="text-red-500">Error: {error?.status}</h2>;


  if (isSuccess && posts) {
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }

  return null;}

export default Posts;