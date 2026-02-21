import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'

function App() {
  

  return (
   
  <div className="w-full h-screen bg-gray-100 p-10 text-slate-700">
   <div>
     <h2 className="max-w-md mx-auto text-center text-2xl font-bold">Simple Counter Application</h2>
    <div className="max-w-md mx-auto mt-10 space-y-5">
<Counter/>
    </div>
   </div>
    </div>  

  )
}

export default App
