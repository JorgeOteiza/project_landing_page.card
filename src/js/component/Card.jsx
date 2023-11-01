import React from "react";

export const Card = ({ imageUrl, title, description, buttonText }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
                <img src={imageUrl} className="card-img-top" alt="Card" style={{ objectFit: "cover", width: "100%", height: "325px" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">{buttonText}</a>
                </div>
            </div>
        </div>
    );
};
