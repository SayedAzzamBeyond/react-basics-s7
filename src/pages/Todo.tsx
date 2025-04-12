import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router"
interface Todo{
  completed: boolean | null;
  id: number | null;
  userId: number | null;
  todo: string | null
};
const InitTodo = {
  completed: null,
  id: null,
  userId: null,
  todo: null
}
export default function Todo() {
  const todo = useLoaderData();
  
  return (
    <div>
      <h1>Todo Details</h1>
      <p>Todo ID: {todo.id }</p>
      <p>Todo Title: {todo.todo}</p>
      <p>{todo.completed ? "Completed" : "Not Completed"}</p>
      <p>User ID: {todo.userId}</p>
    </div>
  )
}

