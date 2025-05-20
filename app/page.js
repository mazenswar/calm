import React from "react";

import HomeTwo from "./homeTwo/HomeTwo";
export const metadata = {
	title: "Center for Anxiety and Life Management (CALM Therapy)",
	description:
		"Offering virtual therapy for adults navigating anxiety, OCD, perfectionism, and spiritual inquiry. Our integrative approach combines evidence-based psychology with Eastern wisdom traditions. Licensed in NJ, NY, and PA.",
	alternates: {
		canonical: "https://calmtherapy.center",
	},
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: "Center for Anxiety and Life Management (CALM Therapy)",
		description:
			"Offering virtual therapy for adults navigating anxiety, OCD, perfectionism, and spiritual inquiry. Our integrative approach combines evidence-based psychology with Eastern wisdom traditions. Licensed in NJ, NY, and PA.",
		url: "https://calmtherapy.center",
		siteName: "Center for Anxiety and Life Management (CALM Therapy)",
		images: [
			{
				url: "https://calmtherapy.center/social/ss.png",
				width: 1200,
				height: 630,
				alt: "CALM Therapy logo and tagline",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Center for Anxiety and Life Management (CALM Therapy)",
		description:
			"Virtual therapy rooted in science and soul. We help adults move through anxiety, burnout, and spiritual inquiry with grounded care. Serving NJ, NY, and PA.",
		images: ["https://calmtherapy.center/social/ss.png"],
	},
};
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"@id": "https://calmtherapy.center/#organization",
	name: "CALM Therapy",
	legalName: "Center for Anxiety and Life Management PLLC",
	url: "https://calmtherapy.center",
	logo: "https://calmtherapy.center/calm_logo.png",
	founder: [
		{
			"@type": "Person",
			name: "Dr. Tanya Singh",
		},
		{
			"@type": "Person",
			name: "Mazen Alswar",
		},
	],
	sameAs: [
		"https://www.linkedin.com/company/center-for-anxiety-and-life-management-calm-therapy",
		"https://www.psychologytoday.com/us/therapists/tanya-singh-edison-nj/1338674",
		"https://zencare.co/provider/therapist/tanya-singh",
	],
};
function Main() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<HomeTwo />
		</>
	);
}

export default Main;
