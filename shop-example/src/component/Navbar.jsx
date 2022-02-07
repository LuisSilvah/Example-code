import React from "react";
import { Link } from "react-router-dom";

function Navbar (props) {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold  fs-4" to="/">LA CLLECTION</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="buttons">
                        <Link to="/" className="btn btn-outline-dark">
                            <i className="fa fa-sign-in me-1"></i>
                            Login
                        </Link>
                        <Link to="/" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-user-plus me-1"></i>
                            Register
                        </Link>
                        <Link to="/" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-shopping-cart me-1"></i>
                            Cart (0)
                        </Link>
                        </div>
                </div>
            </div>
        </nav>
        </ div>
    )
}

export default Navbar