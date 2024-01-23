export interface User {
    id: string;
    name: string;
    description: string;
    age: number;
}

export interface UserForm {
    name: string;
    description: string;
    age: number;
    role: string;
    isActive: boolean;
}