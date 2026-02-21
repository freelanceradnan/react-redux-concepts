import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

const Counter = () => {
    const [count,setCounter]=useState(0)
    const handlerIncrement=()=>{
        setCounter((prevCount)=>prevCount+1)
    }
    const handlerDecrement=()=>{
        setCounter((prevCount)=>prevCount-1)
    }
    return (
        <div className='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
 <Count count={count}/>
 <div className="flex flex-row gap-2">
    <Button handler={handlerIncrement}>Increament</Button>
    <Button handler={handlerDecrement} type="denger">Decrement</Button>
 </div>
       
        </div>
    );
};

export default Counter;