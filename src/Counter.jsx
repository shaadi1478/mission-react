import { useState } from "react"

export default function Counter(){
    const [count, setCount]= useState(0);

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () =>{
        const reCount = count - 1;
        setCount(reCount);
    }
    return (
        <div style={{border: '2px solid red', 
        borderRadius:'20px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}