import { useEffect, useState } from "react";
import { Form, useActionData, useLoaderData } from "react-router";
import { Todo } from "../interface";

export default function CreateTodoAction() {
  const initTodos = useLoaderData();
  const data = useActionData();
  const [todos, setTodos] = useState<Todo[]>(initTodos);
  useEffect(()=>{
    if(data){
      setTodos([...todos,data]);
    }
  },[data]);
  return (
    <>
    <ul>
      {todos.map((todo) => (<li key={todo.id}>{todo.todo}</li>))}
    </ul>
    <Form method="post">
      <input type="text" name="todo"  placeholder="enter todo title"  />
      <input type="submit" />
    </Form>
    </>
  )
}

