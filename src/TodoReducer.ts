import { Reducer } from "react";
import { Todo, TodoReducerType } from "./interface";


export const TodoReducer: TodoReducerType = (state, action) => {
    switch (action.type) {
        case "INIT_TODO": return action.payload;
        case "ADD_TODO": 
            const newTodo: Todo = {
                id: action.payload.total +1,
                todo: action.payload.title,
                completed: false
            }
            return [newTodo,...state];
        case "CHANGE_TODO": 
        return state.map(todo => {
            return todo.id === action.payload.id ? {...todo, [action.payload.key]: action.payload.value} : todo
        })
        default:
          return state;
      }
};