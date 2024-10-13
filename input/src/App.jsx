import React, { useState } from "react";

import Input from "./input";

const TextInput = () => {

const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  }
  //console.log(input);

  return (
    <>
    <div>
    <label>Digita qui...</label>
    <input type="text" name="text" value={input} onChange={handleChange}/>
    </div>
    <br/>
    <br/>
    <Input />
    </>
  )
}
export default TextInput;