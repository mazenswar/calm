import React from "react";

export const metadata = {
	title: "Fees and services",
	description: "information about therapy rates and how to use insurance",
};

function ServicesPage() {
	return (
		<main id="services">
			<section className="fees-container">
				<h1 className="center-title">
					Online Therapy Fees (sliding scale available)
				</h1>
				<h3>
					We do not currently work with insurance, but you may still be able to
					get reimbursed for our services through your insurance depending on
					your out-of-network benefites. For more information visit our{" "}
					<a href="/">Insurance Page</a>
				</h3>
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
		</main>
	);
}

export default ServicesPage;
