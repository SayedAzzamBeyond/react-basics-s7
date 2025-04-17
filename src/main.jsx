import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

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
    <App></App>
  // </StrictMode>,
)
