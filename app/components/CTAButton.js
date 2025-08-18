"use client";
import Link from "next/link";
import React from "react";
import "../scss/components/_cta-button.scss";
const SUBTXT =
	"Secure, confidential, and no pressure to commit, just a first step.";
function CTAButton({
	text = "Schedule a Free Consultation",
	subtext = SUBTXT,
}) {
	function handleGTagTrigger() {
		if (typeof window !== "undefined") {
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				event: "calendly_cta_clicked",
			});
		}
	}
	return (
		<div id="cta-button">
			<Link
				href={"https://calendly.com/tsingh-calmtherapy/15min"}
				className="cta-button link"
				onClick={handleGTagTrigger}
				target="_blank"
				rel="noopener"
			>
				{text}
			</Link>

			<p className="cta-subtext">{subtext}</p>
		</div>
	);
}

export default CTAButton;

// <!-- Calendly badge widget begin -->
// <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
// <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
// <script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/tsingh-calmtherapy/15min', text: 'Schedule time with me', color: '#0069ff', textColor: '#ffffff', branding: true }); }</script>
// <!-- Calendly badge widget end --></link>
