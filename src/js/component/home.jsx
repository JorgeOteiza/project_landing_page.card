import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer"; // Asegúrate de usar 'Footer' en lugar de 'footer'

const Home = () => {
    return (
        <div className="wrapper d-flex flex-column">
            <Navbar />
            <Jumbotron />
            <div className="container d-flex flex-wrap justify-content-center">
                {[...Array(8).keys()].map((index) => (
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4" key={index}>
                        <Card />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
