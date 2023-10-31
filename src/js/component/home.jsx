import React from "react";

import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./footer";


const Home = () => {
	return (
		<div className="container">
			<Navbar />
			<Jumbotron />
			<div className="row w-auto" style={{ flexWrap: "wrap" }}>
				{[...Array(8).keys()].map((index) => (
					<div className="col-12 col-sm-6 col-md-6 col-lg-3" key={index}>
						<Card />
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
};

export default Home;
