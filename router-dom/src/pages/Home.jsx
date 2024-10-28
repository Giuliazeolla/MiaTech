import React from "react";

const Home = () => {
    const todos = ["Fare spesa", "Pulire casa", "Andare in palestra"];

    return (
        <div>
            <h1>Lista dei to-do</h1>
            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))
                }
            </ul>
        </div>
    )
};

export default Home;