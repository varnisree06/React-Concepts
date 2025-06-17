import React,{useState} from 'react'

const App = () => {
  const [count, setCount] = useState(1)
  

  const handle = () => {
    // x = x + 1;
    // console.log(x)
    //setCount(count + 1)
    setCount((curVal) => {
      return curVal + 1;
    })
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handle}>Click</button>
    </div>
  )
}

export default App
