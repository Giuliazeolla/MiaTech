import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter((_counter) => {
    return _counter + 1;
  })
}

  const handleDecrement = () => {
    setCounter((_counter) => {
      return _counter - 1;
    })
  }

  const handleReset = () => {
    setCounter(0);
  }

  useEffect(() => {
    document.title = `Counter ${counter}`;
  }, [counter]);

  return (
    <div>Count: {counter}
    <button onClick={handleClick}>ADD</button>
    <button onClick={handleDecrement}>REMOVE</button>
    <button onClick={handleReset}>RESET</button>
    </div>
  )
}
export default Counter;
