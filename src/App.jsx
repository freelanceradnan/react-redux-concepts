import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import {InitialCounter} from './assets/database/InitialCounter'
import Stats from './Components/Stats';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Features/Counters/counterSlice'


function App() {
const counters=useSelector((state)=>state.counters)
const dispatch=useDispatch()
const handlerIncrement=(counterId)=>{
dispatch(increment(counterId))
}
const handlerDecrement=(counterId)=>{
 dispatch(decrement(counterId))
}
const totalvalue=counters.reduce((sum,curr)=>sum+curr.value,0)
  return (
   
  <div className="w-full h-screen bg-gray-100 p-10 text-slate-700">
   <div>
     <h2 className="max-w-md mx-auto text-center text-2xl font-bold">Simple Counter Application</h2>
    <div className="max-w-md mx-auto mt-10 space-y-5">

{counters.map(count=>(
  <Counter key={count.id} counter={count} onIncrement={()=>handlerIncrement(count.id)} onDecrement={()=>handlerDecrement(count.id)}/>
  
  
))}
   <Stats totalvalue={totalvalue}/>
    </div>
 
   </div>
    </div>  

  )
}

export default App
