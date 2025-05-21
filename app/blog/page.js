import React from "react";
import MediumArticles from "./MediumArticles";
import "../scss/components/_blog.scss";

export const metadata = {
	title: "Blog | CALM Therapy",
	description:
		"Explore thoughtful articles from CALM Therapy on anxiety, perfectionism, emotional healing, spirituality, and mental well-being. Authored by Dr. Tanya Singh and colleagues, these pieces offer grounded insights and compassionate reflections.",
	openGraph: {
		title: "Blog | CALM Therapy",
		description:
			"Explore thoughtful articles on anxiety, emotional healing, and integrative therapy. Written by the team at CALM Therapy to support your personal growth and mental clarity.",
		url: "https://calmtherapy.center/blog",
		siteName: "Center for Anxiety and Life Management (CALM Therapy)",
		images: [
			{
				url: "https://calmtherapy.center/social/ss.png",
				width: 1200,
				height: 630,
				alt: "CALM Therapy",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Blog | CALM Therapy",
		description:
			"Articles exploring mental wellness, self-understanding, and integrative therapy—rooted in both science and spirit.",
		images: ["https://calmtherapy.center/social/ss.png"],
	},
	alternates: {
		canonical: "https://calmtherapy.center/blog",
	},
};
function BlogPage() {
	return <MediumArticles />;
}

export default BlogPage;
