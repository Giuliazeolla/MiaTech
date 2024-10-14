import React from "react";
import { useState } from "react";

const AlertInput = () => {
    const [inputValue, setInputValue] = useState('');

    const showAlert = () => alert('Il valore input è '+ inputValue);

    return (
        <>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={showAlert}>Alert!</button>
        </>
    )
}

export default AlertInput;