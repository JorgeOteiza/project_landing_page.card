import React from "react";

export const Card = ({ imageUrl, title, description, buttonText }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-1 mb-4">
            <div className="card h-100 d-flex flex-column">
                <img src={imageUrl} className="card-img-top w-500 h-325" alt="Card" style={{ objectFit: "cover", width: "100%", height: "325px" }} />
                <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title mt-4 mb-4">{title}</h5>
                    <p className="card-text p-3 pt-0">{description}</p>
                    <div className="mt-auto mb-3">
                        <a href="#" className="btn btn-primary">{buttonText}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
