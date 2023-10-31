import React from "react";

export const Card = ({ imageUrl, title, description, buttonText }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt="Card" style={{ objectFit: "cover", width: "100%", height: "200px" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">{buttonText}</a>
                </div>
            </div>
        </div>
    );
};
