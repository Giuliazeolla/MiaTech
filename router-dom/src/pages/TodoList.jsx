import { useDispatch, useSelector } from "react-redux"
import { addTodo, removeTodo } from "../slices/todoSlice";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeTodo(id));
    };

    const handleAdd = (todo) => {
        const newTodo = { id: Math.random(), title: "Nuovo to-do" }
        dispatch(addTodo(newTodo));
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
                        </li>
                    ))
                }
            </ul>
        </>
    )
};

export default TodoList;