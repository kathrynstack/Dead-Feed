import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export default function SignUp() {
    const [formState, setFormState] = useState({ username: '', email: '', password: '', });

    const [addUser] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...formState },
            });
            const token = data.register.token;
            console.log('Token:', token);

        } catch (e) {
            console.error(e);
        }

        setFormState({ username: '', email: '', password: '', });
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