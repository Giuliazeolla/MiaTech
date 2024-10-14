import React from "react";
import { useRef } from "react";

const Input = () => {

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const form = new FormData(e.target);
        const data = Object.fromEntries(form);

        console.log(data);
    }

    return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name="first_name" ref={inputRef} placeholder="Inserisci il testo"/>
        <input type="text" name="last_name" ref={inputRef} placeholder="Inserisci il testo"/>
        <button type="submit" onClick={focusInput}>Focus</button>
    </form>
    </>
    )
}

export default Input;