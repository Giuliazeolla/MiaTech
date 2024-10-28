import React from "react";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
    const { id } = useParams();

    const todos = [
        { id: 1, title: "Fare spesa", description: "Comprare gli ingredienti per la torta" },
        { id: 2, title: "Pulire casa", description: "Pulire bagno e cucina" },
        { id: 3, title: "Andare in palestra", description: "Allenare addominali e gambe" },
    ];

    const todo = todos.find(todo => todo.id === Number(id));
    if (!todo) {
        return alert("To-do non trovato!");
    } else {
        return (
            <div>
                <h1>Dettagli del to-do</h1>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
            </div>
        )
    }
};

export default TodoDetail;