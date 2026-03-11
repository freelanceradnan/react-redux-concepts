import React, { useState } from 'react';
import { useAddPostsMutation } from '../Features/apiSlice';

const FromData = () => {
    const [title,setTitle]=useState('')
    const [post,setPost]=useState('')
    const[addPost,{isLoading,isError,isSuccess}]=useAddPostsMutation()
    const submitHandler=(e)=>{
        e.preventDefault()
        addPost({title,post})
    }
    return (
        <div className='bg-amber-50'>
            from data
        <form action="" className='flex flex-col gap-2 p-2' onSubmit={submitHandler}>
        <input type="text" name="" id="" placeholder='enter your post' className='w-full border-blue-400 border' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" name="" id="" placeholder='enter your post' className='w-full border-blue-400 border' value={post} onChange={(e)=>setPost(e.target.value)}/>
        <button type="submit" className='border bg-blue-500 text-white p-2 rounded-sm' disabled={isLoading}>Add Data</button>
        </form>
       
        {isError && <h2 className="text-center text-red-500">An Error Adding</h2>}
        {isSuccess && <h2 className='text-blue-400'>Post id:{data.id} successed</h2>}
        </div>
    );
};

export default FromData;