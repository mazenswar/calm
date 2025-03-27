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
	},
};
function Main() {
	return <HomeTwo />;
}

export default Main;
