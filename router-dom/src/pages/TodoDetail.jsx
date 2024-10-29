import React, { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

const TodoDetail = () => {
    const { id } = useParams();

    const todos = [
        { id: 1, title: "Fare spesa", description: "Comprare gli ingredienti per la torta" },
        { id: 2, title: "Pulire casa", description: "Pulire bagno e cucina" },
        { id: 3, title: "Andare in palestra", description: "Allenare addominali e gambe" },
    ];

    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get("search") || "";

    const [inputValue, setInputValue] = useState(searchTerm);

    const handleSearch = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setSearchParams(value ? { search: value } : {});
    }

    const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <h1>Lista dei to-do</h1>
            <input type="teext" placeholder="Cerca un to-do..." value={inputValue} onChange={handleSearch}/>
            <ul>
                {
                    filteredTodos.map((todo) => (
                        <li key={todo.id}>
                            {todo.title}
                            <Link to={`/todos/${todo.id}`}>Visualizza dettagli to-do</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

};

export default TodoDetail;