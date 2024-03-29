import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Post({id}) {

    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
            setPost(response.data);
            })
            .catch(error => {
            console.error(error);
            });
        }, []);

        return (
            <div key={post.id} className="card-content">
                <h2><strong>{post.title}</strong></h2>
                <div className="content">
                    {post.body}
                </div>
            </div>
        )

}

export default Post