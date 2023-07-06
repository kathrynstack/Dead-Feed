import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";


export default function Profile() {
    return (
        <body>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-white text-dark">
                            <div className="card-body p-5 text-center">
                                <section className="profile">
                                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                        <div class="container-fluid">
                                         
                                            
                                                <div class="navbar-nav">
                                                    <a href="#" class="nav-item nav-link active">Home</a>
                                                    <a href="#" class="nav-item nav-link">Profile</a>
                                                    <a href="#" class="nav-item nav-link">Messages</a>
                                                    <a href="#" class="nav-item nav-link disabled" tabindex="-1">Reports</a>
                                                
                                                <div class="navbar-nav ms-auto">
                                                    <a href="#" class="nav-item nav-link">Login</a>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}
