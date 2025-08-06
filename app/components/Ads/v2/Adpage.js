import React from "react";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Bio from "./Bio";
import "./adpage.scss";

function Adpage({ dem }) {
	return (
		<main id="adpage">
			<Hero dem={dem} />
			<Pricing />
			<Bio />
		</main>
	);
}

export default Adpage;
