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
			title: "Healing Anxiety & Intrusive Thoughts with Care That Goes Deeper",
			sub: "We specialize in helping adults navigate anxiety, OCD, and intrusive thoughts using a thoughtful blend of evidence-based approaches like ERP and CBT alongside holistic, integrative methods tailored to your unique experience \n\n Online · Licensed NY · NJ · PA",
		},
	};

	const { title, sub } = copy[dem] || copy.women;

	return (
		<section className="ad__hero">
			<div className="content">
				<h1>{title}</h1>
				<p className="linebreak">{sub}</p>
				<CTAButton />
			</div>
		</section>
	);
}

export default Hero;
