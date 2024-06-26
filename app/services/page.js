import React from "react";
import { services, specialities } from "../data/services";

function ServicesPage() {
	return (
		<>
			<main id="services">
				<section>
					<h1 className="center-title">
						Online Therapy Fees (sliding scale available)
					</h1>
					<div className="text">
						<h3>45-minute session: $220</h3>
						<h3>One-time 75-minute intake session: $365</h3>
					</div>
				</section>

				<section className="specialities-section">
					<h1 className="center-title">Areas of Speciality</h1>
					<div className="text">
						{specialities.map((spec) => {
							return (
								<>
									<h3 key={`speciality-${spec.title}`}>{spec.title}</h3>
									<p className="linebreak">{spec.summary}</p>
								</>
							);
						})}
					</div>
				</section>
			</main>
		</>
	);
}

export default ServicesPage;
