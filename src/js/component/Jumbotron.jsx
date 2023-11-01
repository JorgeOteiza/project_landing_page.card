import React from "react";

export const Jumbotron = () => {
    return (
        <div className="p-1 mb-0 rounded-3 text-start mt-4"> {/* Agregado mt-4 para el margen superior */}
            <div className="container py-5 mt-0 custom-bg-color">
                <h1 className="display-5 mx-3 fw-bold">A Warm Welcome!</h1>
                <p className="col-md-8 mx-3 fs-4 w-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid simplique quaerant nam illo aspernatur vitae fugiat numquam repellatt.
                </p>
                <button className="btn btn-primary mx-3 btn-lg start" type="button">Call to action!</button>
            </div>
        </div>
    );
};
