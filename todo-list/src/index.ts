const greeting: string = "Hello Typescript!";
console.log(greeting);

import { Todo, User } from './types';

const todos: Todo[] = [];
const users: User[] = [];

function addTodo(title: string): Todo {
    const newTodo: Todo = {
        id: todos.length + 1,
        title: title,
        completed: false,
    }
    todos.push(newTodo);
    return newTodo;
};

function assignTodoToUser(todoId: number, userId: number): boolean {
    const todo = todos.find((t) => t.id === todoId);
    const user = users.find((u) => u.id === userId);


    if (todo && user) {
        todo.userId = userId;
        return true;
    };
    return false;
};

function getUserTodos(userId: number): Todo[] {
    return todos.filter((todo) => todo.userId === userId);
};

function parseInput(input: unknown): string {
    if (typeof input === "string") {
        return input;
    } else if (typeof input === "number") {
        return input.toString();
    } else {
        error("Input di tipo non valido");
    }
}

function error(message: string): never {
    throw new Error(message);
}
