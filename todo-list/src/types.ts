export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId?: number;
}

interface TodoWithMetadata extends Todo {
    metadata: any;
}

export interface User {
    id: number;
    name: string;
    email?: string;
}
