import Link from "next/link";
import React from "react";
import "../scss/components/_cta-button.scss";

function CTAButton({ text = "Schedule a Free Consultation" }) {
	return (
		<div id="cta-button">
			<Link href="/contact" className="cta-button link">
				{text}
			</Link>
			<p className="cta-subtext">
				Secure, confidential, and no pressure to commit, just a first step.
			</p>
		</div>
	);
}

export default CTAButton;
