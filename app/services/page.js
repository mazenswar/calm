import React from "react";
import HowToUseInsurance from "./HowToUseInsurance";

export const metadata = {
	title: "Fees and services",
	description: "information about therapy rates and how to use insurance",
};

function ServicesPage() {
	return (
		<>
			<main id="services">
				<section className="fees-container">
					<h1 className="center-title">
						Online Therapy Fees (sliding scale available)
					</h1>
					<div className="fees">
						<div className="fee-container">
							<h3>45-minute session</h3>
							<h2>$220</h2>
						</div>
						<div className="fee-container">
							<h3>One-time 75-minute intake session</h3>
							<h2>$365</h2>
						</div>
					</div>
				</section>

				<HowToUseInsurance />
			</main>
		</>
	);
}

export default ServicesPage;
