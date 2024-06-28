import React from "react";
import { treatmentLinks } from "../data/treatmentResources";
import TherapyTools from "./TherapyTools";

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
			<section>
				<h1>Treatment Links</h1>
				<ul className="treatment-links">
					{treatmentLinks.map((tl, i) => (
						<li key={`treatment-link-${i}`}>
							<a className="link" href={tl.url}>
								{tl.text}
							</a>
						</li>
					))}
				</ul>
			</section>
			<TherapyTools />
		</main>
	);
}

export default Resources;
