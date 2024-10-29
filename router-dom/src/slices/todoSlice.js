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
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;