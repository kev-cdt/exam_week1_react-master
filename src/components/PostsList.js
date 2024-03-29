import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                        <div key={post.id} className="card">
                            <div className="card-content">
                                <h2><strong>{post.title}</strong></h2>
                                <div className="content">
                                    {post.body}
                                </div>
                                <Link to={`/postdetails/${post.id}`}>
                                    <button className='button'>See more details</button>
                                </Link>
                                <Link to={`/delete/${post.id}`}>
                                    <button className='button'>Delete the post</button>
                                </Link>
                                <Link to={`/edit/${post.id}`}>
                                    <button className='button'>Edit the post</button>
                                </Link>
                            </div>
                        </div>
                ))}
            </div>
    );
}

export default PostsList