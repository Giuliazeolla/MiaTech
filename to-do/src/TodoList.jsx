import { useContext, useState } from "react";
import { TodoContext } from "./provider/TodoProvider";

const TodoList = () => {
    const { todos, addTodo }  = useContext(TodoContext);

    const [searchTerm, setSearchTerm] = useState('');

    const filteredTodos = todos.filter(todo =>
        todo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleAddTodo = () => {
        const newTodo = prompt('Inserisci un nuovo to-do:');
        if (newTodo) {
            addTodo(newTodo);
        }
    };

    return (
        <div>
            <input type="text" placeholder="Cerca to-do..." value={searchTerm} onChange={handleSearchChange} />
            <ul>
                {
                    filteredTodos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))
                }
            </ul>
            <button onClick={handleAddTodo}>Aggiungi To-Do</button>
        </div>
    )
}


export default TodoList;