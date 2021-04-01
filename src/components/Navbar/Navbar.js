import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { FaUserCircle } from 'react-icons/fa';
import firebase from "firebase/app";


const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleLogout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            setLoggedInUser({});
            history.push('/');
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container fw-bold">
                <Link className="navbar-brand fs-2" to="/">Pick <span className="text-danger">A</span> Book</Link>
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
                            <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
                         </>:
                         <Link className="btn btn-secondary" to="/login">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;