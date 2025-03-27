import React from "react";
import Blog from "./Blog";

export const metadata = {
	title: "Blog",
	description: "latest blogs about mental health, tools, tips and guides",
	keywords: "blog, writing, mental health, tips, guides, depression, anxiety",
	alternates: {
		canonical: "https://calmtherapy.center/blog",
	},
	openGraph: {
		title: "Blog",
		description: "latest blogs about mental health, tools, tips and guides",
		url: "https://calmtherapy.center/blog",
		siteName: "CALM Therapy",
		locale: "en_US",
		type: "website",
	},
};
function BlogPage() {
	return <Blog />;
}

export default BlogPage;
