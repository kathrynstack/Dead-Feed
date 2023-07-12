import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import ProfilePic from "./profilepic.png";
import EditIcon from "./edit.png";
import Footer from "../footer";

export default function Profile() {
    return (
        <div className="container">
            <div className="card-body p-5 text-center bg-dark">
                <img className="position-absolute fixed-top p-3" src={EditIcon} alt="Edit"></img>
                <div className="row login_box">
                    <div className="col-md-12 col-xs-12 text-light" align="center">
                        <img className="w-50" src={ProfilePic} alt="Avatar" />
                        <h1 className="username p-2">Gabby Pinto</h1>
                        <span className="badges">Badges Go Here</span>
                    </div>
                    <div className="p-3" align="center">
                        <textarea className="bio" placeholder="About Me"></textarea>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )            
}