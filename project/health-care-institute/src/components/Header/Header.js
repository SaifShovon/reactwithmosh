import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/AuthProvider';
import './Header.css';
const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/shipping">Shipping</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/placeorder">PlaceOrder</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <span> {user.email} </span>
                        </li>
                        <li className="nav-item">
                            {user?.email && <button onClick={logout}>Log Out</button>}
                        </li>
                    </ul>
                </div>
            </nav>







        </div>
    );
};

export default Header;