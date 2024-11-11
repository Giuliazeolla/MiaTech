"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greeting = "Hello Typescript!";
console.log(greeting);
const todos = [];
const users = [];
const metadata = [];
function addTodo(title, metadata) {
    const newTodo = {
        id: todos.length + 1,
        title,
        completed: false,
        metadata
    };
    todos.push(newTodo);
    return newTodo;
}
;
function assignTodoToUser(todoId, userId) {
    const todo = todos.find((t) => t.id === todoId);
    const user = users.find((u) => u.id === userId);
    if (todo && user) {
        todo.userId = userId;
        return true;
    }
    ;
    return false;
}
;
function getUserTodos(userId) {
    return todos.filter((todo) => todo.userId === userId);
}
;
function parseInput(input) {
    if (typeof input === "string") {
        return input;
    }
    else if (typeof input === "number") {
        return input.toString();
    }
    else {
        error("Input di tipo non valido");
    }
}
function updateTodo(id, updates) {
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) {
        console.error(`Todo con id ${id} non trovato.`);
        return undefined;
    }
    todos[index] = Object.assign(Object.assign({}, todos[index]), updates);
    return todos[index];
}
function error(message) {
    throw new Error(message);
}
