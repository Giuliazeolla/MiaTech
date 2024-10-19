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
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;