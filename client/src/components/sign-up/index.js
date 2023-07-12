import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
// import userData from './userData.json';

export default function Signup() {
    // const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    // const [addUser] = useMutation(ADD_USER);

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     const mutationResponse = await addUser({
    //         variables: {
    //             username: formState.username,
    //             email: formState.email,
    //             password: formState.password,
    //         },
    //     });
    //     const token = mutationResponse.data.addUser.token;
    //     Auth.login(token);
    // };

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    // };

    return (
        <section className="signup">
            <div className="signup-container">
                <h2>Signup</h2>
                {/* <form onSubmit={}> */}
                    <div className="form">
                        <input
                            placeholder="Username"
                            type="username"
                            id="username"
                            // onChange={}
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
                            // onChange={}
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
                            // onChange={}
                            required
                        />
                        <label className="form-label" htmlFor="password">
                            Password
                        </label>
                    </div>
                    <button className="signupBtn" type="submit">
                        Signup
                    </button>
                    
                    <Link to="/login" className="loginLink">← Go to Login</Link>
                {/* </form> */}
            </div>
        </section>
    );
};