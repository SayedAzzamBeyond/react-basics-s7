import { useParams } from "react-router"

export default function Register() {
  const  {'*': splat}= useParams();
  console.log(splat);
  
  return (
    <div>Register</div>
  )
}
