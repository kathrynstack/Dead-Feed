import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER, LOGIN } from '../../utils/queries';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import ProfilePic from './profilepic.png';
import EditIcon from './edit.png';
import Footer from '../footer';
import Auth from '../../utils/auth';

export default function Profile() {
       const handleLogout = () => {
        Auth.logout();
        window.location.href = '/login';
    };

    
    return (
        <div className="container py-7 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark">
                        <div className="card-body p-5 text-center">
                            <img className="position-absolute fixed-top p-3" src={EditIcon} alt="Edit" />
                            <div className="row">
                                <div className="col-md-12 col-xs-12 text-light" align="center">
                                    <img className="w-50" src={ProfilePic} alt="Avatar" />
                                    <h1 className="username p-2">Gabby Pinto</h1>
                                    <span className="badges">Badges Go Here</span>
                                </div>
                               <div className="footer-profile">
                                <Footer />
                            </div>
                            <a className="logout-link" href="/login" onClick={handleLogout}>Logout</a>
                        </div>
                    </div>
                    </div>
        </div>
            </div>
        </div>
    );
}
