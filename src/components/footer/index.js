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

    );
}

export default Footer;
