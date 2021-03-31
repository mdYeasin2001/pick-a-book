import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <Link class="navbar-brand" to="/">Pick A Book</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <Link class="nav-link" to="/admin/manageBooks">Manage Books</Link>
                        <Link class="nav-link" to="/admin/addBook">Add Book</Link>
                        <Link class="nav-link" to="/editBook">Edit Book</Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;