import React, { useRef } from "react";
import ItemList from './ItemList';

const TextInput = () => {
  const items = ["patate", "carote", "zucchine", "pane"];

  const inputRef = useRef();

  const handleClick = () => {
    alert(inputRef.current.value);
  }

  return (
    <>
        <label>Digita qui...</label>
        <input ref={inputRef} type="text" placeholder="digita qui..." />
        <button onClick={handleClick}>Click</button>
      <ItemList items={items} />
    </>
  )
}
export default TextInput;