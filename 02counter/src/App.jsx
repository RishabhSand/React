import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter,setCounter] = useState(10)

  
  let addvalue = () =>{
    if(counter === 20 ){
       return;
    }else{
      setCounter(counter + 1)
    }
  }

  let decreasevalue = () => {
    if(counter === 0 ){
        return;
    }else{setCounter(counter - 1)
    console.log("value decreased",counter)}
    
  }

  // let counter = 5

  return (
    <>
     <h2>Counter value: {counter} </h2>
     <button
     onClick={addvalue}
     >add value</button>
     <button
     onClick={decreasevalue}
     >decrease value</button>
    </>
  )
}

export default App
