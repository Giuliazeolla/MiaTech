import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const todos = [
        {id: 1, title: "Fare spesa", description: "Comprare gli ingredienti per la torta"},
        {id: 2, title: "Pulire casa", description: "Pulire bagno e cucina"},
        {id: 3, title: "Andare in palestra", description: "Allenare addominali e gambe"},
    ];

    return (
        <div>
            <h1>Lista dei to-do</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Home;