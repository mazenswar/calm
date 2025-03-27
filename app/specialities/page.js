import React from "react";
import Specialities from "./Specialities";
export const metadata = {
	title: "Specialities",
	description: "Specialities and areas of expertise",
	alternates: {
		canonical: "https://calmtherapy.center/specialities",
	},
	openGraph: {
		title: "Specialities",
		description: "Specialities and areas of expertise",
		url: "https://calmtherapy.center/specialities",
		siteName: "CALM Therapy",
		locale: "en_US",
		type: "website",
	},
};
function SpecPage() {
	return <Specialities />;
}

export default SpecPage;
