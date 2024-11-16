import { Todo } from "./types";

export function filterTodos(todos: Todo[], filterFn: (todo: Todo) => boolean): Todo[] {
    return todos.filter(filterFn);
}

export type PartialTodo = Partial<Todo>;

export function updatePartialTodo(
    todos: Todo[],
    todoId: number,
    partialTodo: PartialTodo
): Todo[] {
    return todos.map(todo => todo.id === todoId ? { ...todo, ...partialTodo } : todo)
};


export type TodoRecord = Record<number, Todo>;

export function convertArrayToRecord(todos: Todo[]): TodoRecord {
    return todos.reduce((record, todo) => {
        record[todo.id] = todo;
        return record;
    }, {} as TodoRecord);
}
