"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utente = void 0;
var Utente = /** @class */ (function () {
    function Utente(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.todos = [];
    }
    Utente.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    return Utente;
}());
exports.Utente = Utente;
;
