import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";

export default function Profile() {
    return (
        <body style={{ backgroundColor: "yellow" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-white text-dark">
                            <div className="card-body p-5 text-center">
                                <section className="profile">
                                    <div className="row login_box">
                                        <div className="col-md-12 col-xs-12" align="center">
                                            <div className="outer"><img src="http://lorempixel.com/output/people-q-c-100-100-1.jpg" class="image-circle" /></div>
                                            <h1>Your Name Here</h1>
                                            <span>Badges Go Here</span>
                                        </div>
                                        <div className="bio" align="center">
                                            <textarea placeholder="About Me"></textarea>
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