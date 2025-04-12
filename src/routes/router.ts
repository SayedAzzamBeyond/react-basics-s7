import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Auth from "../layouts/Auth";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Main from "../layouts/Main";
import { TodoList } from "../TodoList";
import Movie from "../pages/Todo";
import HomeAuth from "../pages/HomeAuth";
import Todo from "../pages/Todo";
import { newTodoAction, SingleTodoLoader, TodosLoader } from "../components/TodoLoader";
import CreateTodo from "../pages/CreateTodo";
import CreateTodoAction from "../pages/CreateTodoAction";



export default createBrowserRouter([
    {
        Component: Main,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path:"/about",
                Component: About
            },
            {
                path:"/todo",
                Component: TodoList
            },
            {
                path:"/todo/new",
                Component: CreateTodoAction,
                loader: TodosLoader,
                action: newTodoAction
            },
            {
                path:"/todo/:todo_id?",
                Component: Todo,
                loader: SingleTodoLoader
            },
          
        ]
    },
    {
        path: '/auth',
        Component: Auth,
        children: [
            {
                index: true,
                Component: HomeAuth
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register/*',
                Component: Register
            },
        ]
    }
]);
  