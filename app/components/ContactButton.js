"use client";
import Link from "next/link";
import React from "react";

function ContactButton() {
	function handleGTagTrigger() {
		if (typeof window !== "undefined") {
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				event: "calendly_cta_clicked",
			});
		}
	}
	return (
		<Link
			onClick={handleGTagTrigger}
			href="https://calendly.com/tsingh-calmtherapy/15min"
			id="contact-button"
		>
			Book A Consult
		</Link>
	);
}

export default ContactButton;
