import { useState } from "react";
import { Form, useActionData, useLoaderData } from "react-router";
import { Todo } from "../interface";

export default function CreateTodoAction() {
  const initTodos = useLoaderData();
  const data = useActionData();
  const [todos, setTodos] = useState<Todo[]>(initTodos);
  console.log(data);
  return (
    <>
    <h1>{data ? data.todo: ''}</h1>
    <ul>
      {todos.map((todo) => (<li key={todo.id}>{todo.todo}</li>))}
    </ul>
    <Form method="post" navigate={false}>
      <input type="text" name="todo"  placeholder="enter todo title"  />
      <input type="submit" />
    </Form>
    </>
  )
}

