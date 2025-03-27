import React from "react";

import Banner from "../components/Banner";
import gg from "./assets/images/sunset1.jpg";
import KAPSection from "./KAPSection";

///////////

export const metadata = {
	title: "Ketamine-Assisted Psychotherapy",
	description: "information about ketamine-assisted psychotherapy",
	keywords: "journey, ketamine-assisted psychotherapy, therapy, online therapy",
	alternates: {
		canonical: "https://calmtherapy.center/kap",
	},
	openGraph: {
		title: "Ketamine-Assisted Psychotherapy",
		description: "information about ketamine-assisted psychotherapy",
		url: "https://calmtherapy.center/kap",
		siteName: "CALM Therapy",
		locale: "en_US",
		type: "website",
	},
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
