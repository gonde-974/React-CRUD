import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MainNavbarComponent() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Accounts APP</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" to="/">Accounts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add">Add Account</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/edit" tabIndex="-1" aria-disabled="true">Edit/Delete</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MainNavbarComponent;
