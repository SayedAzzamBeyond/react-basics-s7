import { FormEventHandler, memo, useRef } from "react"
import { TodoFormProps } from "./interface";

function TodoForm({onSubmit}: TodoFormProps) {
    console.log("TodoForm");
    
    const titleRef= useRef<HTMLInputElement>(null);
    const handleNewTodo: FormEventHandler<HTMLFormElement> = (e) =>{
        e.preventDefault();
        const value = titleRef.current?.value;
        if(value){
            onSubmit(value);
            if (titleRef.current) {
                titleRef.current.value = '';
            }
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

export default memo(TodoForm);
