import React from "react";
import { treatmentLinks } from "../data/treatmentResources";
import TherapyTools from "./TherapyTools";
import FreeResources from "./FreeResources";
import SelfAssessmentScales from "./SelfAssessmentScales";

function Resources() {
	return (
		<main id="resources">
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
			<SelfAssessmentScales />
		</main>
	);
}

export default Resources;
