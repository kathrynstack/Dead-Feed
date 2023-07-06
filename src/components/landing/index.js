import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import ReactDOM from 'react-dom';
import imageSrc from './quizbtn.png';

export default function Landing() {
    return (
        <body style={{ backgroundColor: "red" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-white text-dark">
                            <div className="card-body p-5 text-center">

                                <section className="landing">
                                    <div className="top-profile">
                                        <h1 className="title">DEAD-FEED</h1>
                                        {/* <img>this is a placeholder for the users icon</img> */}
                                    </div>
                                    <div>
                                        <h2>Categories</h2>
                                    </div>
                                    <div class="container">
                                        <div class="row my-4">
                                            <div class="col">
                                                <h3>Chat</h3>
                                            </div>
                                            <div class="col">
                                                <h3>Earn Badges</h3>
                                            </div>
                                            <div class="col">
                                                <h3>Upload Photos</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <button>
                                        <img src={imageSrc} alt="Button Image" />
                                    </button>
                                    <div>
                                        <h2 >Community Chat</h2>
                                    </div>
                                    <div class="container">
                                        <div class="row my-4">
                                            <div class="col">
                                                <h3>Favorite Slasher?</h3>
                                            </div>
                                            <div class="col">
                                                <h3>Top Final Girl?</h3>
                                            </div>
                                            <div class="col">
                                                <h3>Should they make another Saw? </h3>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

ReactDOM.render(<Landing />, document.getElementById('root')); ReactDOM.render(<Landing />, document.getElementById('root'));