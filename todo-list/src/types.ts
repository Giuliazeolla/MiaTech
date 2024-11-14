export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
    status: TodoStatus;
}

export interface TodoWithMetadata extends Todo {
    metadata?: string | object;
}

export interface User {
    id: number;
    name: string;
    email?: string;
    readonly todos: readonly Todo[];
}

export interface Project {
    id: number;
    name: string;
    users: User[];
    todos: Todo[];
}

export enum TodoStatus {
    Pending = "Pending",
    InProgress = "In Progress",
    Completed = "Completed"
}