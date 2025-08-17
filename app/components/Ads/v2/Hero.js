import React from "react";
import CTAButton from "../../CTAButton";
import heroImg from "./assets/calmv2gads-1.png";
import Image from "next/image";
import Link from "next/link";

function WomenCopy() {
	return (
		<>
			<h1>Women{"'"}s Therapy with a Female Psychologist</h1>
			<p className="linebreak">
				Compassionate therapy for women seeking clarity, connection, and growth.
				Evidence-based care with a human touch · Online in NY · NJ · PA ·
				Available in{" "}
				<Link
					href="/where-we-serve"
					target="_blank"
					rel="noopener noreferrer"
					className="link"
				>
					44 U.S. states and territories
				</Link>{" "}
				through PSYPACT.
			</p>
		</>
	);
}

function POCCopy() {
	return (
		<>
			<h1>Culturally Aware Therapy with a Woman of Color</h1>
			<p className="linebreak">
				Supportive, identity-affirming therapy led by a woman of color. Grounded
				in cultural understanding and evidence-based care · Online in NY · NJ ·
				PA · Available in{" "}
				<Link
					href="/where-we-serve"
					target="_blank"
					rel="noopener noreferrer"
					className="link"
				>
					44 U.S. states and territories
				</Link>{" "}
				through PSYPACT.
			</p>
		</>
	);
}

function ClinicalCopy() {
	return (
		<>
			<h1>Healing Anxiety & Intrusive Thoughts with Care That Goes Deeper</h1>
			<p className="linebreak">
				Struggling with OCD, anxiety, or intrusive thoughts? We offer
				evidence-based care, including gold standard treatments like Exposure
				and Response Prevention (ERP) therapy, along with newer approaches such
				as Inference-Based Cognitive Behavioral Therapy (I-CBT) and Acceptance
				and Commitment Therapy (ACT), blended with integrative and holistic care
				to help you heal at the root. <br />
				<br />
				Online · Licensed in NY · NJ · PA · Available in{" "}
				<Link
					href="/where-we-serve"
					target="_blank"
					rel="noopener noreferrer"
					className="link"
				>
					44 U.S. states and territories
				</Link>{" "}
				through PSYPACT.
			</p>
		</>
	);
}

function Hero({ dem }) {
	// dem === "women" || "poc" || "clinical"

	let Content;
	if (dem === "poc") Content = POCCopy;
	else if (dem === "clinical") Content = ClinicalCopy;
	else Content = WomenCopy;

	return (
		<section className="ad__hero">
			<div className="content">
				<div className="text">
					<Content />
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
