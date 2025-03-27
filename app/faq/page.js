import React from "react";
import FAQ from "./FAQ";
import { questions } from "../data/faq";

function makeJsonLd() {
	const me = questions.map((ele) => ({
		"@type": "Quetion",
		name: ele.q,
		acceptedAnswer: {
			"@type": "answer",
			text: ele.a,
		},
	}));
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: me,
	};
}

const jsonLd = makeJsonLd();

export const metadata = {
	title: "Common Questions",
	description:
		"Frequently asked questions about therapy, insurance and process",
	keywords: "questions, faq, common questions",
	alternates: {
		canonical: "https://calmtherapy.center/faq",
	},
	openGraph: {
		title: "Common Questions",
		description:
			"Frequently asked questions about therapy, insurance and process",
		url: "https://calmtherapy.center/faq",
		siteName: "CALM Therapy",
		locale: "en_US",
		type: "website",
	},
};

function FAQPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<FAQ />;
		</>
	);
}

export default FAQPage;
