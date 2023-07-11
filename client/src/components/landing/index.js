import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
// import quizbtn from './quizbtn.png';

var posts = [
    { id: 1, description: "this is my fav movie" },
    { id: 2, description: "Desc 2" },
    { id: 3, description: "Desc 3" }
];

export default function Landing() {
    return (
        <>
            <h2>Your Dead-Feed</h2>
            <section className='posts'>
                {posts.map(post => (
                    <div className='col-md'>
                        <div className='card bg-white text-dark py-3'>
                            {/* <div className='card-title'>{post.title}</div> */}
                            <img src="https://th.bing.com/th/id/OIP.yjP3lv-tTDzfsO9lZ37nUQHaG6?pid=ImgDet&rs=1"/>
                            <div className='card-body'>{post.description}</div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

