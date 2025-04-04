import { Todo, TodoItemProps } from "./interface"

export const TodoItem: React.FC<TodoItemProps> = ({todo,handleChange}) =>{
    return ( 
        <>
            <li>
                <input type="text" value={todo.todo} onChange={(e)=> handleChange(todo.id,'todo',e.target.value)} />
                <input type="checkbox" checked={todo.completed} onChange={(e) => handleChange(todo.id,'completed',e.target.checked)} />completed
            </li>
        </>
    )
}