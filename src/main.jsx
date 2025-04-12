import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router";
// import './App.css';

import Home from './pages/Home.tsx';
import Profile from './pages/Profile.tsx';
import About from './pages/About.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Movie from './pages/Todo.tsx';
import Main from './layouts/Main.tsx';
import Auth from './layouts/Auth.tsx';
import { TodoList } from './TodoList.tsx';
import router from './routes/router.ts';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
    /************** Declarative Mode */
    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<Main />}>
    //         <Route index element={<Home />} />
    //         <Route path="/profile" element={<Profile />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/todo" element={<TodoList />} />
    //         {/* <Route path="/movie/:movie_id?" element={<Movie />} /> */}
    //         <Route path="/movie/*" element={<Movie />} />

    //     </Route>

    //     <Route path='auth' element={<Auth />}>
    //       <Route index element={<Home />} />
    //       <Route path="login" element={<Login />} />
    //       <Route path="register" element={<Register />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>



    /************** Data Mode */
    <RouterProvider router={router}></RouterProvider>
  // </StrictMode>,
)
