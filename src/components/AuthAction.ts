import { useUserContext } from "../context/UserContext";

const users = [
    {id: 1,name: 'sayed', email: 'sayed@gmail.com',password: 'password'},
    {id: 2,name: 'eslam', email: 'eslam@gmail.com',password: 'password'},
    {id: 3,name: 'omar_yasser', email: 'omar_yasser@gmail.com',password: 'password'},
    {id: 4,name: 'gamal', email: 'gamal@gmail.com',password: 'password'},
    {id: 5,name: 'omar_ahmed', email: 'omar_ahmed@gmail.com',password: 'password'},
]
export async function AuthAction({request}: {request: Request}){
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');
    const user = users.find((user) => (user.email == email) && (user.password == password));
    return user;
}