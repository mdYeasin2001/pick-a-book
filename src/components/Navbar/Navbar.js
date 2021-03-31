import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <Link class="navbar-brand" to="/">Pick A Book</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <Link class="nav-link" to="/home">Home</Link>
                        <Link class="nav-link" to="/orders">Orders</Link>
                        <Link class="nav-link" to="/admin">Admin</Link>
                        <Link class="nav-link" to="/deals">Deals</Link>
                        <Link class="btn btn-success" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;