import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postId])

    return (
        <div>
            <h4>This is post detail for:{postId}</h4>
            <h3>{post.title}</h3>
            <p><small>{post.body}</small></p>
        </div>
    );
};

export default PostDetail;