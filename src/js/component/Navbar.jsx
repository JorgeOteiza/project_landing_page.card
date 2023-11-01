import React from "react";

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg pb-0 pt-1 navbar-dark bg-dark fixed-top d-flex flex-wrap justify-content-center mb-4">
                <div className="container mt-1 mb-2 pl-1">
                    <a className="navbar-brand ps-0" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
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
