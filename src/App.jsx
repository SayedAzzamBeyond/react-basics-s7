// import './Test.css';
// import './App.css';
import { Counter } from './Counter';
import { Item } from './Item';
// import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
const items = [
  {text: 'Space suit', isPacked: true},
  {text: 'Helmet with a golden leaf', isPacked: true},
  {text: 'Photo of Tam', isPacked: false}
];



const App = () => {
  return (
    <>
    <TodoList />
      {/* <ul>
        {items.map(item => <Item  key={item.text}   isPacked={item.isPacked} text={item.text}></Item> )}
      </ul> */}
    </>
  )
};

export default App
