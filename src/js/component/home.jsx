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
			<Footer />
			<div className="row">
				{[...Array(8).keys()].map((index) => (
					<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
						<Card />
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
