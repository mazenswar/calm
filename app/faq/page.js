import React from "react";
import FAQ from "./FAQ";
import "../scss/components/_faq.scss";

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
	return <FAQ />;
}

export default FAQPage;
