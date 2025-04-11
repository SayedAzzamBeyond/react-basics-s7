import { useParams } from "react-router"

export default function Movie() {
    let {"*": s} = useParams();
    console.log(s);
    
    
  return (
    <div>Movie Details</div>
  )
}
