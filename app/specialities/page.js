import React from "react";
import { specialities } from "../data/services";

function Specialities() {
	return (
		<main id="specialities">
			<section id="specialities-section">
				<h1 className="center-title">Areas of Speciality</h1>
				<div className="text">
					{specialities.map((spec) => {
						return (
							<div key={`speciality-${spec.title}`} className="spec-container">
								<h3>{spec.title}</h3>
								<p className="linebreak">{spec.summary}</p>
							</div>
						);
					})}
				</div>
			</section>
		</main>
	);
}

export default Specialities;
