const greeting: string = "Hello Typescript!";
console.log(greeting);

import { Todo, User, TodoWithMetadata, Project, TodoStatus } from './types';
import { Utente } from './Utente';

const todos: Todo[] = [
    {id: 1, title:"Todo", completed: false, status: TodoStatus.InProgress},
    {id: 2, title:"Todo", completed: true, status: TodoStatus.Completed},
];
const users: User[] = [];
const metadata: TodoWithMetadata[] = [];
const todoStatus: TodoStatus[] = [];

function addTodo(title: string, metadata?: string | object): TodoWithMetadata {
    const newTodo: TodoWithMetadata = {
        id: todos.length + 1,
        title,
        completed: false,
        metadata,
        status: TodoStatus.Pending,
    }
    todos.push(newTodo);
    return newTodo;
};

const add = addTodo("Learn Typescript", {});
console.log(add);

function assignTodoToUser(todoId: number, userId: number): boolean {
    const todo = todos.find((t) => t.id === todoId);
    const user = users.find((u) => u.id === userId);

    if (todo && user) {
        todo.userId = userId;
        return true;
    };
    return false;
};

const assign = assignTodoToUser(2, 3);
console.log(assign);

function getUserTodos(userId: number): Todo[] {
    return todos.filter((todo) => todo.userId === userId);
};

const getUser = getUserTodos(2);
console.log(getUser);

function parseInput(input: unknown): string {
    if (typeof input === "string") {
        return input;
    } else if (typeof input === "number") {
        return input.toString();
    } else {
        error("Input di tipo non valido");
    }
}

const parse = parseInput("unknown");
console.log(parse);

function updateTodo(todo: Todo, updates: Partial<Todo>): Todo {
    if (updates.title !== undefined) {
        todo.title = updates.title;
    };
    if (updates.completed !== undefined) {
        todo.completed = updates.completed;
    };
    if (updates.userId !== undefined) {
        todo.userId = updates.userId;
    };

    return todo;
}

function error(message: string): never {
    throw new Error(message);
}

function getTodoSummary(todo: Todo): [string, boolean] {
    return [todo.title, todo.completed]
}

function createProject(id: number, name: string, users: User[], todos: Todo[]): Project {
    return {
        id,
        name,
        users,
        todos
    };
};

function updateTodoStatus(todoId: number, status: TodoStatus): void {
    const todo = todos.find((t) => t.id === todoId);

    if (!todo) {
        throw new Error(`Todo with Id ${todoId} not found`);
    } else {
        todo.status = status;
        console.log(`Todo with Id ${todoId} update to status: ${status}`);
    }
}

const todosStatus = updateTodoStatus(2, TodoStatus.Completed);
console.log(todosStatus);

const utente = new Utente(1, "Giulia", 'giuliazeolla@gmail.com');
const TODO: Todo = {
    id: 3,
    title: "TITLE",
    completed: false,
    status: TodoStatus.Pending,
}
utente.addTodo(TODO)
console.log(utente.todos);
