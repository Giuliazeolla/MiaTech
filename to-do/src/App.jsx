import React from "react";
import TodoList from "./TodoList";
import TodoProvider from "./provider/TodoProvider";

const App = () => {
    return (
        <>
        <TodoProvider>
            <div>
                <h2>Lista To-Do</h2>
                <TodoList />
            </div>
        </TodoProvider>
        </>
    );
}

export default App;