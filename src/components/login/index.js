import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import userData from '../login/userData.json';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login:', email, password);
        const user = userData.find((user) => user.email === email && user.password === password);
        if (user) {
            console.log('User logged in:', user);
        } else {
            console.log('Invalid credentials');
        }
    };
    return (
        <body style={{ backgroundColor: "black" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-white text-dark">
                            <div className="card-body p-5 text-center">
                                <section className="login">
                                    {/* <section class="vh-100 gradient-custom"> */}
                                    <div class="container py-5 h-100">
                                        <div class="row d-flex justify-content-center align-items-center h-100">
                                            {/* <div class="col-12 col-md-8 col-lg-6 col-xl-5"> */}
                                            <div class="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                                                <div class="card-body p-5 text-center">

                                                    <div class="mb-md-5 mt-md-4 pb-5">

                                                        <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                                        <form onSubmit={handleLogin}>
                                                            <div class="form-outline form-white mb-4">
                                                                <input type="email" id="typeEmailX" class="form-control form-control-lg"
                                                                    value={email} onChange={(e) => setEmail(e.target.value)} required />                                                                                                                       <label class="form-label" for="typeEmailX">Email</label>
                                                            </div>
                                                            <div class="form-outline form-white mb-4">
                                                                <input type="password" id="typePasswordX" class="form-control form-control-lg"
                                                                    value={password} onChange={(e) => setPassword(e.target.value)} required />
                                                                <label class="form-label" for="typePasswordX">Password</label>
                                                            </div>
                                                            <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                                                            <button class="btn btn-outline-light btn-lg px-2" type="submit">Login</button>
                                                        </form>
                                                        <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                                            <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                                                            <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-5"></i></a>
                                                            <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                    {/* </section> */}
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}