import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";

const Home = () => {
    const cardData = [
        { imageUrl: "https://www.bodyboardking.com/assets/full/638576_638578.jpg?20210812095421", title: "Tabla Bodyboard VS", description: "'Boogies' en distintas medidas y estilos y para distintos gustos, sistemas hidrodinámicos que aportan fluidez y seguridad en las paredes de tus mejores olas.", buttonText: "Ver mas >" },
        { imageUrl: "https://escuelasoulsurf.cl/wp-content/uploads/2021/11/aletas-makapuu-pro.jpeg", title: "Aletas Churchill", description: "Modelo clásico de aletas, diseño de punta alargada para una mejor adherencia a tus olas. Éste modelo es apto para aficionados o deportistas de élite que busquen un rendimiento destacable.", buttonText: "Ver mas >" },
        { imageUrl: "https://mardefondo.cl/wp-content/uploads/2021/05/LEASH-BODYBOARD-GRIS.jpg", title: "Leash Pride", description: "Leash de muy fácil uso y muy seguro para no separarte de tu boogie, adaptado para un buen uso sin interrupciones.", buttonText: "Ver mas >" },
        { imageUrl: "https://www.tablassurfshop.com/wp/wp-content/uploads/2018/07/clasificacion-neoprenos-mm-01.jpg", title: "Trajes de Neopreno", description: "Variedades de trajes de Neopreno adaptados tanto para temperaturas bajo cero y también para climas cálidos. Disponibles en todas las medidas anatómicas.", buttonText: "Ver mas >" }
    ];

    return (
        <>
            <div className="container-fluid wrapper d-flex flex-column mb-4">
                <Navbar />
                <Jumbotron />
                <div className="container d-flex flex-wrap justify-content-center rounded-3 pr-3 pl-3 pt-0 mb-5">
                    {cardData.map((data, index) => (
                        <Card key={index} imageUrl={data.imageUrl} title={data.title} description={data.description} buttonText={data.buttonText} className="mb-4" />
                    ))}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
