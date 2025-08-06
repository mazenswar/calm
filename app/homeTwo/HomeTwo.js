import React from "react";

import BrandBanner from "./BrandBanner";

import Specs from "./Specs";
import Bio from "./Bio";
import Fees from "./Fees";
import Hero from "./Hero";

function HomeTwo() {
	return (
		<main id="homeTwo">
			<Hero />
			<Bio />
			<Fees />
			<Specs />
			<BrandBanner />
		</main>
	);
}

export default HomeTwo;
