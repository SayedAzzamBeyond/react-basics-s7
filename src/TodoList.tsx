import { ChangeEvent, useCallback, useEffect, useState } from "react";
import TodoItem from "./TodoItem"
import { Todo } from "./interface";
import useGetTodos from "./useGetTodos";
import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";
import { usePaginationInput } from "./usePaginationInput";
import styles from './Todo.module.css';
import { Link } from "react-router";


export const TodoList = () =>{
    const [pagination,setPagination] = useState({limit: 10,skip: 0,total: 0});
    const [filteredTodos,dispatch] = useGetTodos({pagination,setPagination});
    const { handleInputChange } = usePaginationInput({pagination,setPagination});

    const handleChange =useCallback( (id: number,key: string,value: string | boolean) => {
        dispatch({type: "CHANGE_TODO",payload: {id,key,value}})
    },[dispatch]);

    const handleAddNewTodo = useCallback((title: string)=>{
        const total = pagination.total + 1;
        setPagination({...pagination, total});
        dispatch({type: "ADD_TODO",payload: {title,total}})
    },[setPagination,pagination.total,dispatch]);

    return (
        <>
            <input type="number" value={pagination.total} onChange={(e) => setPagination({...pagination,total: +e.target.value})} />
            <TodoForm onSubmit={handleAddNewTodo} />
            <div>
                <ul className={`${styles['todo_list']} ${styles['bg2']}`}>
                    {filteredTodos.map(todo => <TodoItem handleChange={handleChange} key={todo.id} todo={todo} />)}
                </ul>
            </div>
           <TodoFilter limit={pagination.limit} skip={pagination.skip} handleInputChange={handleInputChange} />
        </>
    )
}