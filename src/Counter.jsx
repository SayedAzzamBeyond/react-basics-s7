import { useState } from "react";

export const Counter = ()=>{
    const [ counter, setCounter] = useState(0);
    
    const increment = ()=>{
        setCounter(counter + 1);
        setCounter((value) => value + 1);
        setCounter((value) => value + 1);
    }
    return (
        <>
            {counter}
            <button onClick={increment} >increment</button>
        </>
    )
}