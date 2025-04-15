import { FormEventHandler, memo, useRef } from "react"
import { TodoFormProps } from "./interface";
import { useNavigate } from "react-router";

function TodoForm({onSubmit}: TodoFormProps) {
    let navigate = useNavigate();

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
            navigate("/");
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
