import React from "react";

export const Jumbotron = () => {
    return (
        <div className="p-3 pb-0 mt-3 mb-4 pt-5 text-start mx-auto"> {/* Agregado mt-4 para el margen superior */}
            <div className="container py-4 mt-1 pr-0 pl-0 p-2 rounded-3 custom-bg-color">
                <h1 className="display-1 mx-4 mt-2 pt-1 pb-2 fs-7 fw-normal">Ondas de Excelencia</h1>
                <p className="col-md-8 me-1 ms-4 mt-2 fs-4 w-auto">
                    Explora nuestros productos exclusivos para una experiencia inolvidable. Contamos con productos de primera calidad, todo lo que necesitas para renovar o adentrarte en el mundo de las olas y sacar el máximo provecho a tus sesiones .
                </p>
                <button className="btn btn-primary mx-4 btn-lg start" type="button">Quiero consejos</button>
            </div>
        </div>
    );
};
