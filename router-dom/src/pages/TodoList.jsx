import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo, modifyTodo } from "../slices/todoSlice";
import { useState } from "react";


const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [newText, setNewText] = useState('');

    const handleRemove = (id) => {
        dispatch(removeTodo(id));
    };

    const handleAdd = () => {
        const newTodo = { id: Math.random(), title: "Nuovo to-do" }
        dispatch(addTodo(newTodo));
    };

    const handleInput = (e) => {
        setNewText(e.target.value)
    }

    const handleEdit = (todoId) => {
        dispatch(modifyTodo({ id: todoId, newDescription: newText }));
    }

    return (
        <>
            <h1>Lista To-do</h1>
            <button onClick={handleAdd}>Aggiungi to-do</button>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.title} : {todo.description}
                            {todo.completed === false ? (
                                <div>
                                    <input type="text" placeholder="complete todo..." onChange={handleInput}/>
                                    <button onClick={() => handleEdit(todo.id)}>Salva</button>
                                </div>
                            ) : 'Completed'}
                            <button onClick={() => handleRemove(todo.id)}>Rimuovi to-do</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
};

export default TodoList;