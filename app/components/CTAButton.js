"use client";
import Link from "next/link";
import React from "react";
import "../scss/components/_cta-button.scss";

function CTAButton({ text = "Schedule a Free Consultation" }) {
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
			>
				{text}
			</Link>
			<p className="cta-subtext">
				Secure, confidential, and no pressure to commit, just a first step.
			</p>
		</div>
	);
}

export default CTAButton;
