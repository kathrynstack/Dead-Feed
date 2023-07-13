import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './success.css';
import Login from '../login/index';

export default function Success() {
  return (
    <section className="success">
     <div className="success-container">
      <h2>Signup Successful</h2>
      <p>Congratulations! Your signup was successful.</p>
      <p>You can now login using your credentials.</p>
      <div>
        <Link to="/login" className="profileLink">
          <button className="loginBtn" type="submit">
            Login
          </button>
        </Link>
      </div>
    </div>
    </section>
  );
}
