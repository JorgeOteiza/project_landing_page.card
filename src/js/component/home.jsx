import React from "react";

import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<section style={{ display: "flex", gap: 18, overflow: "auto", padding: 18 }}>
				{
					[...Array(8).keys()].map(() => <Card></Card>)
				}
			</section>
		</div>
	);
};

export default Home;
