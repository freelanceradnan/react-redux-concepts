import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';


const Counter = ({counter,onIncrement,onDecrement}) => {

    return (
        <div className='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
 <Count count={counter}/>
 <div className="flex flex-row gap-2">
    <Button handler={onIncrement}>Increament</Button>
    <Button handler={onDecrement} type="denger">Decrement</Button>

 </div>
       
        </div>
    );
};

export default Counter;