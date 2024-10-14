import React, { useState } from "react";
import Input from "./input";
import AlertInput from "./ref";
import List from "./list";

const TextInput = () => {

  const [input, setInput] = useState('');
  const items = ['Elemento1', 'Elemento2', 'Elemento3', 'Elemento4'];

  const handleChange = (event) => {
    setInput(event.target.value);
  }
  //console.log(input);

  return (
    <>
      <div>
        <label>Digita qui...</label>
        <input type="text" name="text" value={input} onChange={handleChange} />
      </div>
      <br />
      <br />
      <Input />
      <AlertInput />
      <div>
        <h1>Lista degli elementi:</h1>
        <List items= {items} />
      </div>
    </>
  )
}
export default TextInput;