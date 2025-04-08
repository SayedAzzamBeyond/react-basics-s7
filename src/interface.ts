import { ADD_TODO, CHANGE_TODO, INIT_TODO } from './constants';
import { ChangeEvent, Reducer } from "react";

export interface Todo{
    id: number;
    todo: string;
    completed: boolean;
}
export interface TodoItemProps{
    todo: Todo,
    handleChange: (id: number,key: string,value: string | boolean) => void
}

export interface GetTodosProps{
  limit: number,
  skip: number,
  setTotal: Function
}
export interface TodoFormProps{
    onSubmit: (title: string)=>void
}
export interface TodoFilterProps{
    limit: number,
    skip: number,
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}
type TodoChangeType = 'todo' | 'completed';

// { id: number } & { [K in TodoChangeType]: K extends 'todo' ? string : boolean }
export type TodoReducerType = Reducer<Todo[], { type: typeof ADD_TODO | typeof CHANGE_TODO | typeof INIT_TODO; payload: any }>;