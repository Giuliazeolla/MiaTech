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