import React from "react";

export const Card = () => {
    return (
        <div className="col mb-4">
            <div className="card mx-auto" style={{ minWidth: 300, width: "100%", height: 325 }}>
                <img src="..." className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "10px", height: "100%", maxHeight: "200px", overflow: "hidden" }}>
                    <h5 className="card-title" style={{ height: "50px", overflow: "hidden" }}>Card title</h5>
                    <p className="card-text" style={{ height: "50px", overflow: "hidden" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>

            </div>
        </div>
    );
};
