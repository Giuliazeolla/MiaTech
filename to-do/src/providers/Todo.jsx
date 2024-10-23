import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState([
        'Comprare il latte',
        'pulire cucina',
        'Leggere Libro',
        'fare Spesa'
    ]);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (todoToRemove) => {
        setTodos(todos.filter((todo) => todo !== todoToRemove));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;