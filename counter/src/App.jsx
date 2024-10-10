import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter((_counter) => {
    return _counter + 1;
  })};

  return (
    <div>Count: {counter}
    <button onClick={handleClick}>ADD</button>
    </div>
  )
}
export default Counter;
