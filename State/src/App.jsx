import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TabButton from './Components/TabButton'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState("Click on any one tab");
  const displayContent = ["First Content","Second Content","Third Content"];

  function handleSelect(data){
    if(data==='first'){
      setData(displayContent[0]);
    }
    else if(data==='second'){
      setData(displayContent[1]);
    }
    else if(data==='third'){
      setData(displayContent[2])
    }
  }

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      <div className='tabContainer'>
        <TabButton onSelect={()=>handleSelect('first')}>First</TabButton>
        <TabButton onSelect={()=>handleSelect('second')}>Second</TabButton>
        <TabButton onSelect={()=>handleSelect('third')}>Third</TabButton>
      </div>
      <div className='display'>
        <p>{data}</p>
      </div>
    </>
  )
}

export default App
