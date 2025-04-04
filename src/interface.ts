export interface Todo{
    id: number;
    todo: string;
    completed: boolean;
}
export interface TodoItemProps{
    todo: Todo,
    handleChange: (id: number,key: string,value: string | boolean) => void
}