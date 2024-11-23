import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo, toggleTodo } from "../slices/todoSlice";
import { useState } from "react";


const TodoList = () => {
    const [input, setInput] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeTodo(id));
    };

    const handleAdd = (todo) => {
        const newTodo = { id: Math.random(), title: "Nuovo to-do" }
        dispatch(addTodo(newTodo));
    };

    const handleToggle = (e, todoText, id) => {
            setInput(e.target.value);
            dispatch(toggleTodo(todoText, id));
    }

    return (
        <>
            <h1>Lista To-do</h1>
            <button onClick={handleAdd}>Aggiungi to-do</button>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.title}
                            <button onClick={() => handleRemove(todo.id)}>Rimuovi to-do</button>
                            <></>
                            <button>
                                {
                                    todo.completed ? 'Completato' : <input type="text" placeholder="Completa" onChange={(e) => handleToggle(e, todo.id, todo.title)} />
                                }
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
};

export default TodoList;