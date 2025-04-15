import { v4 as uuidv4 } from 'uuid';

export const SingleTodoLoader =   async ({params}: {params: any}) => {
    const res = await fetch(`https://dummyjson.com/todos/${params.todo_id}`);
    const data = await res.json();
    return data;
}
export const TodosLoader =  async ({params}: {params: any}) => {
    const res = await fetch(`https://dummyjson.com/todos?limit=10`);
    const data = await res.json();
    return data.todos;
}

export const newTodoAction = async({request}: {request: Request}) => {
    const data = await request.formData();
    
    const newTodo = {
        id: uuidv4(),
        todo: data.get('todo'),
        completed: false
      };
      // call post todos api to save new todo into database
    return newTodo;
  }