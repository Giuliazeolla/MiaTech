import { useCallback, useMemo, useState } from "react";
import useFilteredTodos from "./hooks/useFilteredTodos";

const ToDoList = () => {
    const [todos] = useState([
        'Comprare latte',
        'pulire cucina',
        'Fare Spesa',
        'leggere un Libro'
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const todosFiltered =useMemo(() => {
        return todos.filter(todo => 
            todo.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }, [todos, searchTerm]);


    const handleSearchTerm = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);


    return (
        <div>
            <input type="text" placeholder="Cerca to-do..." value={searchTerm} onChange={handleSearchTerm} />
            <ul>
                {todosFiltered.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))
                }
            </ul>
        </div>
    )
}


export default ToDoList;
