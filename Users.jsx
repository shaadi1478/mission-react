import { useEffect } from "react";
import { useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(ref => ref.json())
        .then(data => setUsers(data))
    }, [])
    return(
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}