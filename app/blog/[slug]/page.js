import Link from "next/link";
import Parser from "rss-parser";

const parser = new Parser();

export async function generateMetadata({ params }) {
	const feed = await parser.parseURL("https://medium.com/feed/@tsingh_3014");

	const post = feed.items.find((item) => {
		const guid = item.guid;
		const slug = guid.split("/").pop();
		return slug === params.slug;
	});

	if (!post) {
		return {
			title: "Blog Post | CALM Therapy",
		};
	}

	// Fallback: convert the content HTML to plain text
	const htmlContent = post["content:encoded"];
	const plainText = htmlContent
		.replace(/<[^>]*>/g, "") // remove all HTML tags
		.replace(/\s+/g, " ") // collapse extra whitespace
		.trim()
		.slice(0, 160); // truncate for meta description

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
	const feed = await parser.parseURL("https://medium.com/feed/@tsingh_3014");
	const post = feed.items.find((item) => {
		const guid = item.guid;
		console.log(item);
		const slug = guid.split("/").pop(); // get the last segment
		return slug === params.slug;
	});

	if (!post) return <p>Post not found.</p>;

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
						dangerouslySetInnerHTML={{ __html: post["content:encoded"] }}
					></div>
				</div>
			</section>
		</main>
	);
}
