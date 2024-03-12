import React from 'react';
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar(props) {
    return (
        <>
            <div className="navbar navbar-expand-md bg-dark navbar-dark d-flex align-items-center position-sticky sticky-top">
                <a href="#" className="navbar-brand">Movie App</a>

                <ul className="navbar-nav">
                    <li className="nav-item"><a href="" className="nav-link">Main</a></li>
                    <li className="nav-item"><a href="" className="nav-link">News</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Latest Movies</a></li>
                </ul>

                <button className="btn btn-info d-block ml-auto">Sign up</button>
            </div>
        </>
    );
}

export default Navbar;