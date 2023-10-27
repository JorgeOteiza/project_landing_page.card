import React from "react";

import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";

//create your first component
const Home = () => {
	return (
		<div classNameName="text-center">
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<section style={{ display: "flex", gap: 18, overflow: "auto", padding: 18 }}>
				{
					[1, 2, 3, 4, 5, 6, 7, 8].map(() => <Card></Card>)
				}
			</section>
		</div>
	);
};

export default Home;
