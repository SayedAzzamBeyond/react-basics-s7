import { useLocation, useSearchParams } from "react-router";

export default function About() {
  let [searchParams] = useSearchParams();
  // let location = useLocation();
  console.log(searchParams.get('name'));
  
  // console.log(searchParams.get("name"),searchParams.get("id"));
  
  return (
    <div>About</div>
  )
}
