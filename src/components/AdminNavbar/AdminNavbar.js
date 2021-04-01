import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container fw-bold">
                <Link className="navbar-brand fs-2" to="/">Pick <span className="text-danger">A</span> Book</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/admin/manageBooks">Manage Books</Link>
                        <Link className="nav-link" to="/admin/addBook">Add Book</Link>
                        <Link className="nav-link" to="/admin/editBooks">Edit Book</Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;