import { FormEventHandler, useRef } from "react"
import { TodoFormProps } from "./interface";

export default function TodoForm({onSubmit}: TodoFormProps) {
    const titleRef= useRef(null);
    const handleNewTodo: FormEventHandler<HTMLFormElement> = (e) =>{
        e.preventDefault();
        const value = (titleRef.current as HTMLInputElement | null)?.value;
        if(value){
            onSubmit(value);
        }
    }
  return (
    <>
        <form action="" onSubmit={handleNewTodo}>
            <input type="text" ref={titleRef} id="todo_title" placeholder="enter todo title" />
            <input type="submit"  />
        </form>
    </>
  )
}
