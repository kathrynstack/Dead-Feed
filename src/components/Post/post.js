import React from 'react';

const Post = ({ title, content, comments }) => {
    return (
      <div className="post">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="comments">
          <h3>Comments:</h3>
          {comments.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))}
        </div>
      </div>
    );
  };
  
  export default Post;
