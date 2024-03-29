import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostsList() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
            setPosts(response.data);
            })
            .catch(error => {
            console.error(error);
            });
        }, []);
    
        return (
            <div>
                {posts.map(post => (
                    <div key={post.id} class="card">
                        <div class="card-content">
                            <h2>{post.title}</h2>
                            <div class="content">
                                {post.body}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    );
}

export default PostsList