import Link from "next/link";
import brainImg from "./assets/images/blog.webp";
import Image from "next/image";

async function getMediumArticles() {
	const res = await fetch(
		"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tsingh_3014"
	);
	if (!res.ok) {
		console.error("Failed to fetch Medium articles");
		return [];
	}
	const data = await res.json();
	return data.items || [];
}

export default async function MediumArticles() {
	const articles = await getMediumArticles();

	return (
		<main id="blog">
			<section>
				<div className="img-container">
					<Image
						src={brainImg.src}
						alt="brain illustration"
						width={360}
						height={360}
						sizes="(max-width: 768px) 250px, 360px"
						style={{ width: "100%", height: "auto" }}
						priority
					/>
				</div>
				<div className="medium-container">
					<h1 className="center-title">Blogs</h1>
					{articles.map((a) => {
						const id = a.guid.split("/").pop();
						return (
							<Link href={`/blog/${id}`} key={a.guid} className="article-link">
								<p className="article-title">{a.title}</p>
								<span>
									Published {new Date(a.pubDate).toLocaleDateString()}
								</span>
							</Link>
						);
					})}
					<div role="link" className="article-link soon">
						<p>More Blogs Coming Soon!</p>
					</div>
				</div>
			</section>
		</main>
	);
}
