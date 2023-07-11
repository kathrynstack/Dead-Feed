import React from "react";
import "bootstrap/dist/css/bootstrap.css";
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
                <Link to="/landing">
                    <img src={HomeIcon} alt="Home" />
                </Link>
            </div>
            <div className="quiz">
                <Link to="/quiz">
                    <img src={QuizIcon} alt="Quiz" />
                </Link>
            </div>
            <div className="new-post">
                <Link to="/new-post">
                    <img src={NewPostIcon} alt="NewPost" />
                </Link>
            </div>
            <div className="profile">
                <Link to="/">
                    <img src={ProfileIcon} alt="Profile" />
                </Link>
            </div>
        </nav>
    );
}

export default Footer;
