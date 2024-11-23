import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {id: 1, title: "Fare spesa", description: "Comprare gli ingredienti per la torta", completed: false},
        {id: 2, title: "Pulire", description: "Pulire cucina e bagno", completed: false},
        {id: 3, title: "Allenamento", description: "Allenare addominali e spalle", completed: true},
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        modifyTodo: (state, action) => {
            const {id, newDescription } = action.payload;
            const todo = state.find((t) => t.id === id && t.completed === false);
            if (todo) {
            todo.description = todo.description + ' ' + newDescription;
            }
        },
    },
});

export const { addTodo, removeTodo, toggleTodo, modifyTodo } = todoSlice.actions;
export default todoSlice.reducer;