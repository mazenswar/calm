import React from "react";
import Keta from "./Keta";
import "../scss/components/_kap.scss";

///////////

export const metadata = {
	title:
		"Ketamine-Assisted Psychotherapy (KAP) | CALM Therapy - A Gentle Path to Emotional Healing",
	description:
		"Learn how ketamine-assisted psychotherapy (KAP) at CALM Therapy can support emotional healing, anxiety relief, and self-discovery. We offer intentional, trauma-informed KAP for adults seeking transformation and long-term change.",
	openGraph: {
		title:
			"Ketamine-Assisted Psychotherapy (KAP) | CALM Therapy - A Gentle Path to Emotional Healing",
		description:
			"Explore KAP at CALM Therapy: evidence-based, spiritually grounded ketamine-assisted psychotherapy for individuals navigating anxiety, OCD, and emotional stuckness.",
		url: "https://calmtherapy.center/kap",
		type: "website",
		images: [
			{
				url: "https://calmtherapy.center/social/ss.png",
				width: 1200,
				height: 630,
				alt: "CALM Therapy social preview image",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Ketamine-Assisted Psychotherapy (KAP) | CALM Therapy",
		description:
			"CALM Therapy offers integrative ketamine-assisted psychotherapy (KAP) to support emotional healing and deeper self-understanding.",
		images: ["https://calmtherapy.center/social/ss.png"],
	},
	alternates: {
		canonical: "https://calmtherapy.center/kap",
	},
};
//////////////

function KAP() {
	return (
		<main id="kap-page">
			<Keta />
		</main>
	);
}

export default KAP;
