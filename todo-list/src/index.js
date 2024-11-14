"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var greeting = "Hello Typescript!";
console.log(greeting);
var types_1 = require("./types");
var todos = [];
var users = [];
var metadata = [];
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
function updateTodo(id, updates) {
    var index = todos.findIndex(function (todo) { return todo.id === id; });
    if (index === -1) {
        console.error("Todo con id ".concat(id, " non trovato."));
        return undefined;
    }
    todos[index] = __assign(__assign({}, todos[index]), updates);
    return todos[index];
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
