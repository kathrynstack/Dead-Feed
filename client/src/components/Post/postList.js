import React from 'react';
import Post from './post';
import feedData from './feedData.json';

const PostList = () => {
    return (
        <div className="post-list">
            {feedData.map((post) => (
                <Post
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    comments={post.comments}
                />
            ))}
        </div>
    );
};

export default PostList;