const greeting: string = "Hello Typescript!";
console.log(greeting);

import { Todo, User, TodoWithMetadata } from './types';

const todos: Todo[] = [];
const users: User[] = [];
const metadata: TodoWithMetadata[] = [];

function addTodo(title: string, metadata?: string | object): TodoWithMetadata {
    const newTodo: TodoWithMetadata = {
        id: todos.length + 1,
        title,
        completed: false,
        metadata
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

function updateTodo(id: number, updates: Partial<Todo>): Todo | undefined {
    const index = todos.findIndex(todo => todo.id === id);

    if (index === -1) {
        console.error(`Todo con id ${id} non trovato.`);
        return undefined;
    }
    todos[index] = { ...todos[index], ...updates };
    return todos[index];
}

function error(message: string): never {
    throw new Error(message);
}

function getTodoSummary(todo: Todo): [string, boolean] {
    return [todo.title, todo.completed]
}

