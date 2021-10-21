import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/AuthProvider';
const Login = () => {
    const { signInUsigGoogle, signInUsigEmailAndPass } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsigGoogle}>Google Sign In</button>
            <button onClick={() => signInUsigEmailAndPass('saaifshovon@gmail.com', '108965S@if')}>Email Pass</button>

            <br />
            <Link to="/register"> New User?</Link>
        </div>
    );
};

export default Login;