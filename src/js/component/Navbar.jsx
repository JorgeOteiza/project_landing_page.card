import React from "react";

export const Navbar = () => {
    return <><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container mx-4">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto ps-2">
                    <li class="nav-item me-2">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item me-2">
                        <a class="nav-link disabled" href="#">About</a>
                    </li>
                    <li class="nav-item me-2">
                        <a class="nav-link disabled" href="#">Services</a>
                    </li>
                    <li class="nav-item me-2">
                        <a class="nav-link disabled" aria-disabled="true">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav></>
}