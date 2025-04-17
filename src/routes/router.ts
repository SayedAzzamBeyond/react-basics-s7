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
import { newTodoAction, revalidateCreateTodo, SingleTodoLoader, TodosLoader } from "../components/TodoLoader";
import CreateTodo from "../pages/CreateTodo";
import CreateTodoAction from "../pages/CreateTodoAction";
import ErrorPage from "../pages/ErrorPage";
import AppContext from "../pages/AppContext";
import Profile from "../pages/Profile";
import { AuthAction } from "../components/AuthAction";


// handle
export default createBrowserRouter([
    {
        path:"/blog",
        // Component: Blog,
        lazy: async () => {
            const { default: Component } = await import("../pages/Blog");
            return { Component };
          },
    },
    {
        Component: Main,
        ErrorBoundary: ErrorPage,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/context",
                Component: AppContext
            },
            {
                path:"/about",
                Component: About,
                handle: {
                    mustAuthenticated: false
                }
            },
            {
                path:"/profile",
                Component: Profile,
                handle: {
                    mustAuthenticated: true
                }
            },
            {
                path:"/todo",
                Component: TodoList
            },
            {
                path:"/todo/new",
                Component: CreateTodoAction,
                loader: TodosLoader,
                action: newTodoAction,
                shouldRevalidate: revalidateCreateTodo,
            },
            {
                path:"/todo/:todo_id?",
                Component: Todo,
                loader: SingleTodoLoader
            },
           
          
        ]
    },
    {
        Component: Auth,
        ErrorBoundary: ErrorPage,
        children: [
            {
                index: true,
                Component: HomeAuth
            },
            {
                path: '/login',
                Component: Login,
                action: AuthAction
            },
            {
                path: '/register/*',
                Component: Register
            },
        ]
    }
]);
  