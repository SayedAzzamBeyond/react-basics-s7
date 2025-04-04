import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem"
import { Todo } from "./interface";



export const TodoList = () =>{
    const [filteredTodos,setFilteredTodos] = useState<Todo[]>([]);
    const [limit,setLimit] = useState(10);
    const [skip,setSkip] = useState(0);

    useEffect(()=>{
         const fetchTodos = async () =>{
            const response = await fetch(`https://dummyjson.com/todos?limit=${limit}&skip=${skip}`)
            const data = await response.json();
            setFilteredTodos(data.todos);
            console.log(data.todos);
        }
        fetchTodos();
    },[limit,skip]);
    

    const handleChange = (id: number,key: string,value: string | boolean) => {
        setFilteredTodos(filteredTodos.map(todo => {
            return todo.id === id ? {...todo, [key]: value} : todo
        }));
    }

    return (
        <>
            <label htmlFor="limit">limit</label>
            <input type="number" value={limit} id="limit" onChange={(e) => setLimit(+e.target.value)}  />
            <label htmlFor="skip">skip</label>
            <input type="number" value={skip} id="skip" onChange={(e) => setSkip(+e.target.value)}  />
            <ul>
                {filteredTodos.map(todo => <TodoItem handleChange={handleChange} key={todo.id} todo={todo} />)}
            </ul>
        </>
    )
}