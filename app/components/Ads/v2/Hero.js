import React from "react";
import CTAButton from "../../CTAButton";

function Hero({ dem }) {
	// dem === "women" || "poc" || "clinical"

	const copy = {
		women: {
			title: "Women's Therapy with a Female Psychologist",
			sub: "Compassionate, evidence-based care · Online sessions · NY · NJ · PA",
		},
		poc: {
			title: "Culturally Aware Therapy with a Woman of Color",
			sub: "Inclusive, evidence-based support · Online sessions · NY · NJ · PA",
		},
		clinical: {
			title: "Evidence-Based Help for Stress & OCD",
			sub: "ERP, CBT & integrative methods · Online · Licensed NY · NJ · PA",
		},
	};

	const { title, sub } = copy[dem] || copy.women;

	return (
		<section className="hero">
			<div className="content">
				<h1>{title}</h1>
				<p>{sub}</p>
				<CTAButton />
			</div>
		</section>
	);
}

export default Hero;
