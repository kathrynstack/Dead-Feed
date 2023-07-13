import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Login from '../login/index';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export default function Signup() {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                username: formState.username,
                email: formState.email,
                password: formState.password,
            },
        });
        const token = mutationResponse.data.addUser.token;
        // Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <section className="signup">
            <div className="signup-container">
                <h2>Signup</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="form">
                        <input
                            placeholder="Username"
                            type="username"
                            id="username"
                            onChange={handleChange}
                            required
                        />
                        <label className="form-label" htmlFor="username">
                            Username
                        </label>
                    </div>
                    <div className="form">
                        <input
                            placeholder="Email"
                            type="email"
                            id="email"
                            onChange={handleChange}
                            required
                        />
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                    </div>
                    <div className="form">
                        <input
                            placeholder="******"
                            type="password"
                            id="password"
                            onChange={handleChange}
                            required
                        />
                        <label className="form-label" htmlFor="password">
                            Password
                        </label>
                    </div>
                    <button className="signupBtn" type="submit">
                    <Link to="/success" className="loginLink">Signup</Link>
                    </button>

                    
                </form>
            </div>
        </section>
    );
};