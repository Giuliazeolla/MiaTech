import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>About</h1>
            <p>Questa applicazione è un semplice gestore dei to-do</p>
            <button onClick={goToHome}>Torna alla Home</button>
        </div>
    )
};

export default About;