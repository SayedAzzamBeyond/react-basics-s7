import { ChangeEvent, useEffect, useState } from "react";
import { TodoItem } from "./TodoItem"
import { Todo } from "./interface";
import useGetTodos from "./useGetTodos";
import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";


export const TodoList = () =>{
    const [limit,setLimit] = useState(10);
    const [total,setTotal] = useState(0);
    const [skip,setSkip] = useState(0);
    const [filteredTodos,dispatch] = useGetTodos({limit,skip,setTotal});

    const handleChange = (id: number,key: string,value: string | boolean) => {
        dispatch({type: "CHANGE_TODO",payload: {id,key,value}})
    }

    const handleAddNewTodo = (title: string)=>{
        dispatch({type: "ADD_TODO",payload: {title,total}})
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>)=>{
        switch (e.target.id) {
            case 'limit':
                setLimit(+e.target.value)
                break;
            case 'skip':
                setSkip(+e.target.value)
                break;
            default:
                break;
        }
    }

    return (
        <>
            <TodoForm onSubmit={handleAddNewTodo} />
            <ul>
                {filteredTodos.map(todo => <TodoItem handleChange={handleChange} key={todo.id} todo={todo} />)}
            </ul>
           <TodoFilter limit={limit} skip={skip} handleInputChange={handleInputChange} />
        </>
    )
}