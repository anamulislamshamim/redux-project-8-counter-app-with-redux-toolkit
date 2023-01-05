import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from './counterSlice';
const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
        <h1>{ count }</h1>
        <button onClick={() => dispatch(decrement())} style={{"marginRight":"20px"}}>Decrement --</button>
        <button onClick={() => dispatch(increment())}>Increment ++</button>
    </>
  )
}

export default Counter