import Link from "next/link";
import fs from "fs";
import path from "path";
import "../../scss/components/_blog-post.scss";

export async function generateMetadata({ params }) {
	const filePath = path.join(
		process.cwd(),
		"public",
		"blogData",
		`${params.slug}.json`
	);
	if (!fs.existsSync(filePath)) {
		return {
			title: "Blog Post | CALM Therapy",
		};
	}

	const fileContents = fs.readFileSync(filePath, "utf-8");
	const post = JSON.parse(fileContents);

	const htmlContent = post["content:encoded"] || post.content || "";
	const plainText = htmlContent
		.replace(/<[^>]*>/g, "")
		.replace(/\s+/g, " ")
		.trim()
		.slice(0, 160);

	return {
		title: `${post.title} | CALM Therapy`,
		description: plainText,
		openGraph: {
			title: `${post.title} | CALM Therapy`,
			description: plainText,
			url: `https://calmtherapy.center/blog/${params.slug}`,
		},
		twitter: {
			card: "summary_large_image",
			title: `${post.title} | CALM Therapy`,
			description: plainText,
		},
		alternates: {
			canonical: `https://calmtherapy.center/blog/${params.slug}`,
		},
	};
}

export default async function BlogPostPage({ params }) {
	const filePath = path.join(
		process.cwd(),
		"public",
		"blogData",
		`${params.slug}.json`
	);
	if (!fs.existsSync(filePath)) {
		return <p>Post not found.</p>;
	}

	const fileContents = fs.readFileSync(filePath, "utf-8");
	const post = JSON.parse(fileContents);

	return (
		<main id="blog-post">
			<section>
				<Link href="/blog" className="back-link">
					← Back to Articles
				</Link>
				<div className="article-container">
					<h1 className="center-title">{post.title}</h1>
					<div
						id="medium-article"
						dangerouslySetInnerHTML={{
							__html: post["content:encoded"] || post.content,
						}}
					></div>
				</div>
			</section>
		</main>
	);
}
