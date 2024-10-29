import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {id: 1, title: "Fare spesa", description: "Comprare gli ingredienti per la torta"},
        {id: 2, title: "Pulire", description: "Pulire cucina e bagno"},
        {id: 3, title: "Allenamento", description: "Allenare addominali e spalle"},
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todoText = state.find((todo) => todo === action.payload);
            if (todoText) {
                todo.completed = !todo.completed;
            }
        }
    },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;