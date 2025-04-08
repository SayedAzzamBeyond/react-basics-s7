import { useEffect, useReducer, useState } from "react";
import { GetTodosProps, Todo } from "./interface";
import { TodoReducer } from "./TodoReducer";

export default function useGetTodos({limit,skip,setTotal}: GetTodosProps) {
  const [filteredTodos,dispatch] = useReducer(TodoReducer,[]);
  useEffect(()=>{
    const fetchTodos = async () =>{
        const response = await fetch(`https://dummyjson.com/todos?limit=${limit}&skip=${skip}`)
        const data = await response.json();
        dispatch({type: 'INIT_TODO',payload: data.todos});
        setTotal(data.total);
    };
    fetchTodos();
},[limit,skip]);

  return [filteredTodos,dispatch] as const;
}
