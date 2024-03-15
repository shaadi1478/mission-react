import Post from './Post';
import './Post.css'
import { useEffect, useState } from "react"

export default function Posts(){
    const[posts, setPost] = useState([]);

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(ref => ref.json())
    //     .then(data => setPost(data))
    // }, [])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(ref => ref.json())
        .then(data => setPost(data))
    },[])



    return(
        <div className="port">
            <h2>Instagram Posts: {posts.length}</h2>

            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}