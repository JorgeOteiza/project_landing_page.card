import React from "react";

export const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3 text-start">
            <div className="container py-5">
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="col-md-8 fs-4 w-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid simplique quaerant nam illo aspernatur vitae fugiat numquam repellatt.
                </p>
                <button className="btn btn-primary btn-lg start" type="button">Call to action!</button>
            </div>
        </div>
    );
};
