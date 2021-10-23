import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/AuthProvider';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                            <Link to="/home"> <FontAwesomeIcon icon={faHome} />  Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about">About</Link>
                        </li>

                        {!user?.email &&
                            <li className="nav-item">
                                <Link to="/register">Register</Link>
                            </li>
                        }

                        {!user?.email &&
                            <li className="nav-item">
                                <Link to="/login">Login</Link>
                            </li>
                        }
                        <li className="nav-item">
                            <Link to="/profile">Profile</Link>
                        </li>
                        {user?.email &&
                            <li className="nav-item">
                                <span className="text-primary">{user.displayName}</span>
                            </li>
                        }
                        {user?.email &&
                            <li className="nav-item">
                                <button onClick={logout} className="btn-small btn-primary" style={{ marginLeft: "10px" }}>Log Out</button>
                            </li>
                        }
                    </ul>
                </div>
            </nav>







        </div>
    );
};

export default Header;