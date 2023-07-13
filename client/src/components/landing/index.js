import React, { useState } from 'react';
import "./style.css";
import Footer from '../footer';
import postData from '../../../../server/seeds/postData.json';

const postData = [
  {
    "id": 1,
    "username": "Ray_Mcf",
    "badge": "https://cdn.pastemagazine.com/www/blogs/lists/New_Chucky.png",
    "content": "Check out this Horror! 🔥",
    "post": "BBBABBA",
    "likes": 25,
    "comments": [
      {
        "id": 1,
        "username": "Cole_Go",
        "badge": "https://cdn.pastemagazine.com/www/blogs/lists/Screen%20shot%202013-08-02%20at%204.55.45%20PM_400x400_scaled_cropp.jpg",
        "comment": "Horriful photo! 😍"
      },
      {
        "id": 2,
        "username": "Katie_ST",
        "badge": "https://cdn.pastemagazine.com/www/blogs/lists/scream-ghostface_400x400_scaled_cropp.jpg",
        "comment": "How Gory! 🙌"
      }
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTttBnFPCRK88deiGBwNFsWw4qtW26CqkqNPE5PNzGydBZbauaDsMU6YBv3wZQwTHUpf4&usqp=CAU"
  },
  {
    "id": 2,
    "username": "Gab_P",
    "badge": "https://cdn.pastemagazine.com/www/blogs/lists/pinhead1_400x400_scaled_cropp.jpg",
    "content": "So excited to watch Evil Dead Rise! 🎬",
    "likes": 50,
    "comments": [
      {
        "id": 1,
        "username": "Jak_Stor",
        "badge": "https://cdn.pastemagazine.com/www/blogs/lists/hanniballlecter_400x400_scaled_cropp.jpg",
        "comment": "Can't wait to see it! 🔥"
      },
      {
        "id": 2,
        "username": "Shady_Been",
        "badge": "https://cdn.pastemagazine.com/www/blogs/lists/friday-the-13thx-large.jpg",
        "comment": "Yes, can't wait! 💫"
      }
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPumtDJpiv15jSiB8W6M5lRDb-GFnUWCoqvw&usqp=CAU"
  },
  {
    "id": 3,
    "username": "Ray158",
    "badge": "https://cdn.pastemagazine.com/www/blogs/lists/freddy-krueger_400x400_scaled_cropp.jpg",
    "content": "Check this out! 🔥",
    "likes": 180,
    "comments": [
      {
        "id": 1,
        "username": "Gabby785",
        "badge": "https://cdn.pastemagazine.com/www/blogs/lists/myers_400x400_scaled_cropp.jpg",
        "comment": "Wow, that's Haunted! 🙌"
      },
      {
        "id": 2,
        "username": "Cole598",
        "badge": "https://cdn.pastemagazine.com/www/blogs/lists/freddy-krueger_400x400_scaled_cropp.jpg",
        "comment": "Wowsah! 🔥"
      }
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gp8QabpRMrWOYFYX7TJMPP-T4B-RniMnGw&usqp=CAU"
  },
];

const LandingPage = () => {
  const [likes, setLikes] = useState(postData.map((post) => post.likes));

  const handleLike = (index) => {
    setLikes((prevLikes) => {
      const updatedLikes = [...prevLikes];
      updatedLikes[index]++;
      return updatedLikes;
    });
  };

  return (
    <div className="container">
      <h1 className="title">Your Dead Feed</h1>
      {postData.map((post, index) => (
        <div key={post.id} className="post-container">
          <div className="post-header">
            <img className="post-avatar" src={post.badge} alt="Avatar" />
            <h2 className="post-username">{post.username}</h2>
          </div>
          <p className="post-content">{post.content}</p>
          <div className="post-image-container">
            <img className="post-image" src={post.image} alt="Post" />
          </div>
          <div className="post-likes">
            <button className="like-button" onClick={() => handleLike(index)}>
              Like
            </button>
            {likes[index]} likes
          </div>
          <div className="post-comments">
            {post.comments.map((comment) => (
              <div key={comment.id} className="comment-container">
                <img className="comment-avatar" src={comment.badge} alt="Avatar" />
                <div className="comment-text">
                  <span className="comment-username">{comment.username}</span>
                  <span>{comment.comment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="footer-landing">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
