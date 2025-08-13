import React from "react";
import CTAButton from "../../CTAButton";
import heroImg from "./assets/calmv2gads-1.png";
import Image from "next/image";

function Hero({ dem }) {
	// dem === "women" || "poc" || "clinical"

	const copy = {
		women: {
			title: "Women's Therapy with a Female Psychologist",
			sub: "Compassionate therapy for women seeking clarity, connection, and growth. Evidence-based care with a human touch · Online in NY · NJ · PA",
		},
		poc: {
			title: "Culturally Aware Therapy with a Woman of Color",
			sub: "Supportive, identity-affirming therapy led by a woman of color. Grounded in cultural understanding and evidence-based care · Online in NY · NJ · PA",
		},
		clinical: {
			title: "Healing Anxiety & Intrusive Thoughts with Care That Goes Deeper",
			sub: "Struggling with anxiety, OCD, or intrusive thoughts? We use evidence-based approaches like ERP and CBT, blended with integrative and holistic care to help you heal at the root. \n\n Online · Licensed in NY · NJ · PA",
		},
	};

	const { title, sub } = copy[dem] || copy.women;

	return (
		<section className="ad__hero">
			<div className="content">
				<div className="text">
					<h1>{title}</h1>
					<p className="linebreak">{sub}</p>
					<CTAButton />
				</div>
				<div className="ad__hero-image-wrapper">
					<Image src={heroImg.src} alt="logo" width={300} height={300} />
				</div>
			</div>
		</section>
	);
}

export default Hero;
