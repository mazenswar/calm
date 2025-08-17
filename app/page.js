import React from "react";
import HomeTwo from "./homeTwo/HomeTwo";

export const metadata = {
	title: "Center for Anxiety and Life Management (CALM Therapy)",
	description:
		"Virtual therapy for adults in 44 states. CALM Therapy helps with anxiety, OCD, and emotional overwhelm through an integrative approach rooted in science and soul. Based on the East Coast.",
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
			"Virtual therapy for adults in 44 states. CALM Therapy helps with anxiety, OCD, and emotional overwhelm through an integrative approach rooted in science and soul. Based on the East Coast.",
		url: "https://calmtherapy.center",
		siteName: "Center for Anxiety and Life Management (CALM Therapy)",
		images: [
			{
				url: "https://calmtherapy.center/social/ss.webp",
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
			"Online therapy across 44 states, rooted in science and soul. Supporting adults through anxiety, burnout, and spiritual inquiry. East Coast-based and trauma-informed.",
		images: ["https://calmtherapy.center/social/ss.webp"],
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
		"https://zencare.co/provider/therapist/tanya-singh",
	],
	areaServed: [
		{
			"@type": "State",
			name: "New York",
		},
		{
			"@type": "State",
			name: "New Jersey",
		},
		{
			"@type": "State",
			name: "Pennsylvania",
		},
		{
			"@type": "State",
			name: "Connecticut",
		},
		{
			"@type": "State",
			name: "Maryland",
		},
		{
			"@type": "State",
			name: "Virginia",
		},
		{
			"@type": "State",
			name: "Georgia",
		},
		{
			"@type": "State",
			name: "Minnesota",
		},
		{
			"@type": "State",
			name: "Illinois",
		},
		{
			"@type": "State",
			name: "Texas",
		},
		// Add remaining PSYPACT states as needed
	],
	availableLanguage: ["English"],
	contactPoint: {
		"@type": "ContactPoint",
		contactType: "customer service",
		email: "info@calmtherapy.center",
	},
};

//////////////
//////////////
//////////////
//////////////
//////////////
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
