import React from "react";
import BottomBanner from "./BottomBanner";
import CTA from "./CTA";
import Banner from "./Banner";
import LandingHeader from "./LandingHeader";
import "../scss/components/_home-2.scss";

function HomeTwo() {
	return (
		<main id="homeTwo">
			<LandingHeader />
			<CTA />
			<Banner />
			<BottomBanner />
		</main>
	);
}

export default HomeTwo;
