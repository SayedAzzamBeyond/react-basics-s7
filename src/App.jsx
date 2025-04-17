// import './Test.css';
// import './App.css';
import { RouterProvider } from 'react-router';
import { Counter } from './Counter';
import { Item } from './Item';
// import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import router from './routes/router';
import { MyProviders } from './pages/AppContext';

const App = () => {
  return (
    <>
      <MyProviders>
          <RouterProvider router={router}></RouterProvider>
      </MyProviders>
    </>
  )
};

export default App
