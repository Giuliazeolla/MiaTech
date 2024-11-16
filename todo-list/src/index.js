"use strict";
/*const greeting: string = "Hello Typescript!";
console.log(greeting);*/
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var Utente_1 = require("./Utente");
var utils_1 = require("./utils");
var todos = [
    { id: 1, title: "Todo", completed: false, status: types_1.TodoStatus.InProgress },
    { id: 2, title: "Todo", completed: true, status: types_1.TodoStatus.Completed },
];
var users = [];
var metadata = [];
var todoStatus = [];
function addTodo(title, metadata) {
    var newTodo = {
        id: todos.length + 1,
        title: title,
        completed: false,
        metadata: metadata,
        status: types_1.TodoStatus.Pending,
    };
    todos.push(newTodo);
    return newTodo;
}
;
var add = addTodo("Learn Typescript", {});
console.log(add);
function assignTodoToUser(todoId, userId) {
    var todo = todos.find(function (t) { return t.id === todoId; });
    var user = users.find(function (u) { return u.id === userId; });
    if (todo && user) {
        todo.userId = userId;
        return true;
    }
    ;
    return false;
}
;
var assign = assignTodoToUser(2, 3);
console.log(assign);
function getUserTodos(userId) {
    return todos.filter(function (todo) { return todo.userId === userId; });
}
;
var getUser = getUserTodos(2);
console.log(getUser);
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
var parse = parseInput("unknown");
console.log(parse);
function updateTodo(todo, updates) {
    if (updates.title !== undefined) {
        todo.title = updates.title;
    }
    ;
    if (updates.completed !== undefined) {
        todo.completed = updates.completed;
    }
    ;
    if (updates.userId !== undefined) {
        todo.userId = updates.userId;
    }
    ;
    return todo;
}
function error(message) {
    throw new Error(message);
}
function getTodoSummary(todo) {
    return [todo.title, todo.completed];
}
function createProject(id, name, users, todos) {
    return {
        id: id,
        name: name,
        users: users,
        todos: todos
    };
}
;
function updateTodoStatus(todoId, status) {
    var todo = todos.find(function (t) { return t.id === todoId; });
    if (!todo) {
        throw new Error("Todo with Id ".concat(todoId, " not found"));
    }
    else {
        todo.status = status;
        console.log("Todo with Id ".concat(todoId, " update to status: ").concat(status));
    }
}
var todosStatus = updateTodoStatus(2, types_1.TodoStatus.Completed);
console.log(todosStatus);
var utente = new Utente_1.Utente(1, "Giulia", 'giuliazeolla@gmail.com');
var TODO = {
    id: 3,
    title: "TITLE",
    completed: false,
    status: types_1.TodoStatus.Pending,
};
utente.addTodo(TODO);
console.log(utente.todos);
var user1 = new Utente_1.Utente(4, "Giulia", 'giuliazeolla23@gmail.com');
var user2 = new Utente_1.Utente(5, "Marco", 'Marcopolli_7@gmail.com');
var user3 = new Utente_1.Utente(6, "Jacopo", 'jacopo-bianchi_3@gmail.com');
var todo1 = { id: 12, title: "Title1", completed: false, status: types_1.TodoStatus.InProgress };
var todo2 = { id: 13, title: "Title2", completed: true, status: types_1.TodoStatus.Completed };
var todo3 = { id: 14, title: "Title3", completed: false, status: types_1.TodoStatus.Pending };
var todo4 = { id: 15, title: "Title4", completed: true, status: types_1.TodoStatus.Completed };
user1.addTodo(todo2);
user1.addTodo(todo3);
user2.addTodo(todo1);
user3.addTodo(todo4);
console.log(user3);
var isCompleted = function (todo) { return todo.completed; };
var completedTodos = (0, utils_1.filterTodos)(todos, isCompleted);
console.log(completedTodos);
var partialTodo = { title: "Learn Typescript", completed: true };
var updateTodos = (0, utils_1.updatePartialTodo)(todos, 1, partialTodo);
console.log(updateTodos);
