import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // sing in with google
                const { displayName, email } = result.user;
                setLoggedInUser({ name: displayName, email });
                history.replace(from);
            }).catch((error) => {
                // Handle Errors here.
                var errorMessage = error.message;
                var email = error.email;
                console.log(errorMessage, email);
            });
    }
    return (
        <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center">
            <div>
                <button style={{ borderRadius: "2rem" }} className="btn btn-outline-light text-dark btn-lg" onClick={handleGoogleSignIn}><FcGoogle className="fs-2 me-5" />Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;