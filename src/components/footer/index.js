import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import { Link } from "react-router-dom";
import HomeIcon from "./icons/home.png";
import QuizIcon from "./icons/quiz.png";
import NewPostIcon from "./icons/new-post.png";
import ProfileIcon from "./icons/profile.png";
import Profile from "../profile";


function Footer() {
    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-dark">
                        <div className="card-body p-5 text-center">
                                <nav className="navbar">
                                    <div className="home">
                                        <img src={HomeIcon} alt="Home" />
                                    </div>

                                    <div className="quiz">
                                        <img src={QuizIcon} alt="Quiz" />
                                    </div>

                                    <div className="new-post">
                                        <img src={NewPostIcon} alt="NewPost" />
                                    </div>

                                    <div className="profile">
                                        <img src={ProfileIcon} alt="Profile" />
                                    </div>
                                </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
