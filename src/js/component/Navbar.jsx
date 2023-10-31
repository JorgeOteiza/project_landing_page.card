import React from "react";

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg pb-0 pt-1 navbar-dark bg-dark fixed-top">
                <div className="container mt-1 mb-2">
                    <a className="navbar-brand ps-2" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto ps-2">
                            <li className="nav-item me-auto">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item me-auto">
                                <a className="nav-link disabled" href="#">About</a>
                            </li>
                            <li className="nav-item me-auto">
                                <a className="nav-link disabled" href="#">Services</a>
                            </li>
                            <li className="nav-item me-auto">
                                <a className="nav-link disabled" aria-disabled="true">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
