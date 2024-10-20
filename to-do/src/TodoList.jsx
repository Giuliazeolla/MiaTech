import { useContext, useState } from "react";
import { TodoContext } from "./provider/TodoProvider";

const TodoList = () => {
    const { todos, addTodo, removeTodo }  = useContext(TodoContext);

    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo) {
            addTodo(newTodo);
            setNewTodo('');
        }
    };

    return (
        <div>
            <input type="text" placeholder="Aggiungi un nuovo to-do..." value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={handleAddTodo}>Aggiungi to-do</button>
            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={index}>{todo}
                        <button onClick={() => removeTodo(todo)}>Rimuovi to-do</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export default TodoList;