import React, { useState } from 'react';
import feedData from './feedData.json';

const PostForm = ({ onAddPost }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: feedData.length + 1,
            title,
            content,
            comments: [],
        };

        onAddPost(newPost);
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required />
            </div>
            <div>
                <label>Content</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required >
                </textarea>
            </div>
            <button type="submit">Add Post</button>
        </form>
    );
};

export default PostForm;
