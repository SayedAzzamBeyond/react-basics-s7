import { useState } from "react";

export default function CreateTodo() {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Learn React" },
    { id: 2, todo: "Learn TypeScript" },
    { id: 3, todo: "Learn Vite" },
  ]);
  const handleNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    const formData = new FormData(form);
    const newTodo = {
      id: todos[todos.length -1].id + 1,
      todo: formData.get("todo") as string
    }
    
    setTodos([...todos,newTodo])
    
  }

  return (
    <>
    <ul>
      {todos.map((todo) => (<li key={todo.id}>{todo.todo}</li>))}
    </ul>
    <form onSubmit={handleNewTodo}  action="">
      <input type="text" name="todo"  placeholder="enter todo title"  />
      <input type="submit" />
    </form>
    </>
  )
}

