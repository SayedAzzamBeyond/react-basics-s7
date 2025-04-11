import { useEffect, useReducer, useState } from "react";
import { GetTodosProps, Todo } from "./interface";
import { TodoReducer } from "./TodoReducer";

export default function useGetTodos({pagination,setPagination}: GetTodosProps) {
  const [filteredTodos,dispatch] = useReducer(TodoReducer,[]);
  useEffect(()=>{
    const fetchTodos = async () =>{
        const response = await fetch(`https://dummyjson.com/todos?limit=${pagination.limit}&skip=${pagination.skip}`)
        const data = await response.json();
        dispatch({type: 'INIT_TODO',payload: data.todos});
        setPagination({...pagination,total: data.total});
    };
    fetchTodos();
},[pagination.limit,pagination.skip]);

  return [filteredTodos,dispatch] as const;
}
