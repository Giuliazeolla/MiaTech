"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterTodos = filterTodos;
function filterTodos(todos, filterFn) {
    return todos.filter(filterFn);
}
