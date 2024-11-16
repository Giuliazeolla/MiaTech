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
exports.filterTodos = filterTodos;
exports.updatePartialTodo = updatePartialTodo;
function filterTodos(todos, filterFn) {
    return todos.filter(filterFn);
}
function updatePartialTodo(todos, todoId, partialTodo) {
    return todos.map(function (todo) { return todo.id === todoId ? __assign(__assign({}, todo), partialTodo) : todo; });
}
;
