"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ContactButton() {
	const [hide, setHide] = useState(false);

	// Hide floating button when hero CTA is visible
	useEffect(() => {
		const target = document.getElementById("cta-button");
		if (!target) return;

		const obs = new IntersectionObserver(
			([entry]) => setHide(entry.isIntersecting),
			{ threshold: 0.2 }
		);

		obs.observe(target);
		return () => obs.disconnect();
	}, []);

	function handleGTagTrigger() {
		if (typeof window !== "undefined") {
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({ event: "calendly_cta_clicked" });
		}
	}

	return (
		<Link
			onClick={handleGTagTrigger}
			href="https://calendly.com/tsingh-calmtherapy/15min"
			id="contact-button"
			className={`fab-consult ${hide ? "hidden" : ""}`}
			aria-label="Book a consult"
			target="_blank"
			rel="noopener"
		>
			{/* Visually‑hidden text for screen readers */}
			<span className="sr-only">Book a consult</span>

			{/* Calendar icon (24 × 24) */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
				<line x1="16" y1="2" x2="16" y2="6" />
				<line x1="8" y1="2" x2="8" y2="6" />
				<line x1="3" y1="10" x2="21" y2="10" />
				<path d="M9 14h6" />
			</svg>

			{/* Text shown on tablet / desktop (hidden on mobile via CSS) */}
			<span className="btn-text">Book&nbsp;A&nbsp;Consult</span>
		</Link>
	);
}

export default ContactButton;
