export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
}

export interface TodoWithMetadata extends Todo {
    metadata?: string | object;
}

export interface User {
    id: number;
    name: string;
    email?: string;
}
