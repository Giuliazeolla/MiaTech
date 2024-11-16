/*const greeting: string = "Hello Typescript!";
console.log(greeting);*/

import { Todo, User, TodoWithMetadata, Project, TodoStatus } from './types';
import { Utente } from './Utente';
import { filterTodos } from './utils';

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

const user1 = new Utente(4, "Giulia", 'giuliazeolla23@gmail.com')
const user2 = new Utente(5, "Marco", 'Marcopolli_7@gmail.com')
const user3 = new Utente(6, "Jacopo", 'jacopo-bianchi_3@gmail.com')

const todo1: Todo = {id: 12, title: "Title1", completed: false, status: TodoStatus.InProgress}
const todo2: Todo = {id: 13, title: "Title2", completed: true, status: TodoStatus.Completed}
const todo3: Todo = {id: 14, title: "Title3", completed: false, status: TodoStatus.Pending}
const todo4: Todo = {id: 15, title: "Title4", completed: true, status: TodoStatus.Completed}

user1.addTodo(todo2);
user1.addTodo(todo3);
user2.addTodo(todo1);
user3.addTodo(todo4);

console.log(user3);

const isCompleted = (todo: Todo) => todo.completed;
const completedTodos = filterTodos(todos, isCompleted);
console.log(completedTodos)