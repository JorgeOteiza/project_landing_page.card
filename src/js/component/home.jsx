import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";


const Home = () => {
    const cardData = [
        { imageUrl: "URL_DE_LA_IMAGEN_1", title: "Título 1", description: "Descripción 1", buttonText: "Botón 1" },
        { imageUrl: "URL_DE_LA_IMAGEN_2", title: "Título 2", description: "Descripción 2", buttonText: "Botón 2" },
    ]
    return (
        <>
            <div className="wrapper d-flex flex-column">
                <Navbar />
                <Jumbotron />
                <div className="container d-flex flex-wrap justify-content-center">
                    {[...Array(4).keys()].map((data, index) => (
                        <Card key={index} imageUrl={data.imageUrl} title={data.title} description={data.description} buttonText={data.buttonText} />

                    ))}
                </div>
                <Footer />
            </div>
        </>
    );
};


export default Home;
