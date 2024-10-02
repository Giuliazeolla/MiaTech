import {useState} from 'react';

const Switch = () => {
    const [button, setButton] = useState('disattivo');
    const onSwitch = () => {
        if(button === 'disattivo') {
            setButton('attivo');
        } else {
            setButton('disattivo');
        }
    }
    return (
        <>
        <button onClick={onSwitch}>{button}</button>
        </>
    )
}
export default Switch;

/* Invece di utlizzare una stringa ma una variabile booleana. 
scrivere css
*/
