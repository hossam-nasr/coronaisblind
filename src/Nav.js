import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse container" id="navbarNav">
            <Link to="/" className="navbar-brand">Corona is Blind</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                </li>                
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                </li>
            </ul>
        </div>
        </nav>
    );
}

export default Nav;