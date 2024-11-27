import React from "react";

import Banner from "../components/Banner";
import gg from "./assets/images/sunset1.jpg";
import KAPSection from "./KAPSection";

///////////

export const metadata = {
	title: "Ketamine-Assisted Psychotherapy",
	description: "information about ketamine-assisted psychotherapy",
	keywords: "journey, ketamine-assisted psychotherapy, therapy, online therapy",
};

//////////////

function KAP() {
	return (
		<main id="kap-page">
			<Banner img={gg} text="Ketamine-Assisted Psychotherapy (KAP)" />
			<KAPSection />
		</main>
	);
}

export default KAP;
