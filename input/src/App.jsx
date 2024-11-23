import React, { useRef } from "react";

const TextInput = () => {

  const inputRef = useRef();

  const handleClick = () => {
    alert(inputRef.current.value);
  }

  return (
    <>
        <label>Digita qui...</label>
        <input ref={inputRef} type="text" placeholder="digita qui..." />
        <button onClick={handleClick}>Click</button>
    </>
  )
}
export default TextInput;