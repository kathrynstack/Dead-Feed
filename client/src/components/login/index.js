import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import userData from './userData.json';
import Header from "../header";

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
        <body class="body">
            <section className="login">
                <div className="login-container">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form">
                            <input
                                type="email"
                                id="typeEmailX"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label className="form-label" htmlFor="typeEmailX">
                                Email
                            </label>
                        </div>
                        <div className="form">
                            <input
                                type="password"
                                id="typePasswordX"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label className="form-label" htmlFor="typePasswordX">
                                Password
                            </label>
                        </div>
                        <p className="forgotPassword">
                            <a href="#!">Forgot password?</a>
                        </p>
                        <button className="submit" type="submit">
                            Login
                        </button>
                        <div>
                            <p className="mb-0">
                                Don't have an account?{' '}
                                <Link to="/signup" className="link">Signup</Link>
                                
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </body>
    );
}