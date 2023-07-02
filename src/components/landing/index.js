import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import ReactDOM from 'react-dom';


export default function Landing() {
    return (
        <body style={{backgroundColor: "red"}}>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-white text-dark">
                        <div className="card-body p-5 text-center">

                            <section className="landing">
                                <div className="top-profile">
                                    <h2 className="title">DEAD-FEED</h2>
                                    {/* <img>this is a placeholder for the users icon</img> */}
                                </div>
                                <section>
                                    <h1>Categories</h1>
                                </section>
                                <section>
                                    <h1>Horror Icon Quiz</h1>
                                </section>
                                <section>
                                    <h1>Community Chat</h1>
                                </section>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    );
};

class Button extends React.Component {
    handleClick() {
      alert('Button clicked!');
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>Click me!</button>
      );
    }
  }
  
  ReactDOM.render(<Button />, document.getElementById('root'));