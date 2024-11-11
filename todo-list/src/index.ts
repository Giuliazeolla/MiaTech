const greeting: string = "Hello Typescript!";
console.log(greeting);

import { Todo } from './types';

const todos: Todo[] = [];

function addTodo(title: string): Todo {
    const newTodo: Todo = {
        id: todos.length + 1,
        title: title,
        completed: false,
    }
    todos.push(newTodo);
    return newTodo;
}
