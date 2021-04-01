import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Pick A Book</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/home">Home</Link>
                        <Link className="nav-link" to="/orders">Orders</Link>
                        <Link className="nav-link" to="/admin">Admin</Link>
                        <Link className="nav-link" to="/deals">Deals</Link>
                        {loggedInUser.email ?
                         <>
                            <span className="nav-link"><FaUserCircle className="fs-4 me-2"/>{loggedInUser.name}</span>
                            <button className="btn btn-outline-secondary">Logout</button>
                         </>:
                         <Link className="btn btn-outline-secondary" to="/login">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;