import { Form, useActionData, useNavigate } from "react-router";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";

export default function Login() {
  const user = useActionData();
  const {setCurrentUser} = useUserContext();
  const navigate = useNavigate();
  useEffect(()=>{
    if(user){
      setCurrentUser(user);
      navigate('/profile');
    }
  },[user])
  return (
    <Form method="POST">
      <input type="text" name="email" placeholder="Enter Your Email" />
      <input type="text" name="password" placeholder="Enter Your Password" />
      <input type="submit" />
    </Form>
  )
}
