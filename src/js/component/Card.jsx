import React from "react";


export const Card = ({ imageUrl, title, description, buttonText }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-1 mb-4">
            <div className="card h-100">
                <img src="https://www.bodyboardking.com/assets/full/638576_638578.jpg?20210812095421" className="card-img-top px-1 w-500 h-325" alt="Card" style={{ objectFit: "cover", width: "100%", height: "325px" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}Card title</h5>
                    <p className="card-text">{description}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid simplique quaerant nam illo aspernatur vitae fugiat numquam repellatt.</p>
                    <a href="#" className="btn btn-primary">{buttonText}Call to action!</a>
                </div>
            </div>
        </div>
    );
};
