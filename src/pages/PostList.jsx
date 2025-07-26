import React, {useState, useEffect} from "react";
import client from "../api/client";
import "../assets/Styles/ArticulosBlog.css"

export default function PostList(){
    const [posts, setPosts] = useState([]);

    useEffect( () =>{
        client.get('/post').then((res) => setPosts(res.data));
    }, []);

    return(
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map( post =>(
                    <div>
                        <li key={post._id}>{post.title}</li>
                        <li key={post._id}>{post.context}</li>
                    </div>
                ))}
            </ul>

        </div>
    )
}