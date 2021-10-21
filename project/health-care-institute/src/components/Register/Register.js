import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/AuthProvider';

const Register = () => {
    const { signUpUsigEmailAndPass } = useAuth();
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="Submit" />
                <br />
                <button onClick={() => signUpUsigEmailAndPass('saaifshovon@gmail.com', '108965S@if')}>Sign Up</button>
            </form>
            <Link to="/login"> Already Registered?</Link>
        </div>
    );
};

export default Register;