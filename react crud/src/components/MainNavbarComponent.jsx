import React from 'react';
import { NavLink } from 'react-router-dom';

function MainNavbarComponent() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className={({ isActive }) => "navbar-brand" + (isActive ? " active" : "")} to="/">Accounts APP</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                                aria-current="page"
                            >
                                Accounts
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/add"
                                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                            >
                                Add Account
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/edit"
                                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                                tabIndex="-1"
                                aria-disabled="true"
                            >
                                Edit/Delete
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MainNavbarComponent;
