import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import "./profilepic.png";

export default function Profile() {
    return (
        <body>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-dark">
                            <div className="card-body p-5 text-center">
                                <section className="profile">
                                    <div className="row login_box">
                                        <div className="col-md-12 col-xs-12" align="center">
                                            <img src="profilepic.png" alt="Avatar"/>
                                            <h1 className="user-name">Gabby Pinto</h1>
                                            <span className="badges">Badges Go Here</span>
                                        </div>
                                        <div className="" align="center">
                                            <textarea className="bio" placeholder="About Me"></textarea>
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
}