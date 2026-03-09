import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Features/postSlice';
import { useGetPostsQuery } from '../Features/apiSlice';


const Posts = () => {
  // Use the flags provided by the hook
  const { data: posts, isLoading, isSuccess, isError, error } = useGetPostsQuery();

  // 1. Loading State
  if (isLoading) return <h1>Loading posts....</h1>;

  // 2. Error State
  if (isError) return <h2 className="text-red-500">Error: {error?.status}</h2>;

  // 3. Success State
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