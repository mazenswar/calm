import React from "react";
import { treatmentLinks } from "../data/treatmentResources";
import TherapyTools from "./TherapyTools";
import FreeResources from "./FreeResources";
import SelfAssessmentScales from "./SelfAssessmentScales";
import Banner from "../components/Banner";
import mountains from "./assets/images/mountains1.png";

export const metadata = {
	title: "Resources",
	description: "free therapy resources and tools",
	alternates: {
		canonical: "https://calmtherapy.center/resources",
	},
	openGraph: {
		title: "Resources",
		description: "free therapy resources and tools",
		url: "https://calmtherapy.center/resources",
		siteName: "CALM Therapy",
		locale: "en_US",
		type: "website",
	},
};

function Resources() {
	return (
		<main id="resources">
			{/* <Banner img={mountains} /> */}
			<section>
				<h3 className="emergency-text">
					If you are in crisis or facing a life-threatening emergency, please
					call 911, go to your nearest emergency room, or contact the{" "}
					<a className="link" href="https://988lifeline.org/">
						988 Suicide & Crisis Lifeline
					</a>
				</h3>
			</section>

			<FreeResources />
		</main>
	);
}

export default Resources;
