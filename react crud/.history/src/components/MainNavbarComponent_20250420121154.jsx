import React from 'react';
import { Link } from 'react-router-dom';

function MainNavbarComponent() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Accounts APP</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Accounts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/features">Add Account</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Update/Delete</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MainNavbarComponent;
