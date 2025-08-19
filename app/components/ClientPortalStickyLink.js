"use client";
// /app/components/ClientPortalStickyLink.js
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./style/client_portal.scss";

const ctaId = "#client__portal__cta";

function ClientPortalStickyLink({ text = "15-Min Consult" }) {
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		const ctaElement = document.querySelector(ctaId);
		const stickyElement = document.getElementById("client__portal__sticky");

		if (!ctaElement || !stickyElement) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setHidden(true); // hide when intersects
					} else {
						setHidden(false); // show otherwise
					}
				});
			},
			{ threshold: 0.1 }
		);

		observer.observe(ctaElement);

		return () => {
			if (ctaElement) observer.unobserve(ctaElement);
		};
	}, []);

	return (
		<Link
			target="_blank"
			rel="noopener noreferrer"
			href="https://tanya-singh.clientsecure.me"
			id="client__portal__sticky"
			className={`sticky-link ${hidden ? "fade-out" : "fade-in"}`}
		>
			{text}
		</Link>
	);
}

export default ClientPortalStickyLink;
