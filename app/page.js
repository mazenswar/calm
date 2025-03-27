import React from "react";

import HomeTwo from "./homeTwo/HomeTwo";
export const metadata = {
	title: "Center For Anxiety and Life Management (Calm Therapy)",
	description:
		"Online therapy services in New Jersey, New York and Pennsylvania",
	keywords: "calm, online therapy, virtual therapy",
	alternates: {
		canonical: "https://calmtherapy.center",
	},
	openGraph: {
		title: "CALM Therapy",
		description:
			"Online therapy services in New Jersey, New York and Pennsylvania",
		url: "https://calmtherapy.center/contact",
		siteName: "CALM Therapy",
		locale: "en_US",
		type: "website",
		images: "/images/Social Media_A Instagram.png",
	},
};

const jsonLd = {
	"@type": "Organization",
	name: "CALM Therapy",
	legalName: "Center for Anxiety and Life Mangement PLLC",
	url: "https://calmtherapy.center",
	"@id": "https://calmtherapy.center",
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
			<HomeTwo />;
		</>
	);
}

export default Main;
