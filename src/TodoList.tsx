import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { TodoItem } from "./TodoItem"
import { Todo } from "./interface";
import useGetTodos from "./useGetTodos";
import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";
import { usePaginationInput } from "./usePaginationInput";
import styles from './Todo.module.css';


export const TodoList = () =>{
    const [pagination,setPagination] = useState({limit: 10,skip: 0,total: 0});
    const [filteredTodos,dispatch] = useGetTodos({pagination,setPagination});
    const { handleInputChange } = usePaginationInput({pagination,setPagination});

    console.log(styles);
    
    const handleChange = useCallback((id: number,key: string,value: string | boolean) => {
        dispatch({type: "CHANGE_TODO",payload: {id,key,value}})
    },[dispatch]);

    const handleAddNewTodo = useCallback((title: string)=>{
        const total = pagination.total + 1;
        setPagination({...pagination, total});
        dispatch({type: "ADD_TODO",payload: {title,total}})
    },[pagination.total,dispatch]);

    return (
        <>
            <TodoForm onSubmit={handleAddNewTodo} />
            <div className={styles['header']} id={styles['bg']}>
                <ul className={`${styles['todo_list']} ${styles['bg2']}`}>
                    {filteredTodos.map(todo => <TodoItem handleChange={handleChange} key={todo.id} todo={todo} />)}
                </ul>
            </div>
           <TodoFilter limit={pagination.limit} skip={pagination.skip} handleInputChange={handleInputChange} />
        </>
    )
}