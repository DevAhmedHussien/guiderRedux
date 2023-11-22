
import './App.css';

import {  useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { sum , min , over , multi } from './slice'

function App() {
  const [Firstvalue,FirstsetValue] = useState(0)
  const [second,setSeCondvalue] = useState(0)

  const handlChange1= (e)=>{
    FirstsetValue(e.target.value)
  }
  const handlChange2= (e)=>{
    setSeCondvalue(e.target.value)
  }
  
  const resultt = useSelector((state) => {
    return state.resultSlice.value
  })
  let dispatch  = useDispatch()
  console.log(resultt)
  
  const handleSum = () =>{
    dispatch(sum({Firstvalue:Firstvalue,second:second}))
    
  }
  const handlemin = () =>{
    dispatch(min({Firstvalue:Firstvalue,second:second}))
    
  }

  const handleOver = () =>{
    dispatch(over({Firstvalue:Firstvalue,second:second}))
  }
  const handleMultiply = () =>{
    dispatch(multi({Firstvalue:Firstvalue,second:second}))
  }


  return (
    <div className="App">
    <input type='number' value={Firstvalue}
    onChange={handlChange1}
    />
    <input type='number' value={second}
    onChange={handlChange2}
    />
    <button onClick={handleSum}> +  </button>
    <button  onClick={handlemin} > -  </button>
    <button  onClick={handleOver} > /  </button>
    <button onClick={handleMultiply}  > * </button>
    <div>
      Result: {resultt}
    </div>
    </div>
  );
}

export default App;
