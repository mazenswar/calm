"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const MediumArticles = () => {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		fetch(
			"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tsingh_3014"
		)
			.then((res) => res.json())
			.then((data) => setArticles(data.items));
	}, []);
	function makeArticles() {
		return articles.map((a) => {
			const id = a.guid.split("/").pop();
			return (
				<Link href={`/blog/${id}`} key={a.title} className="article-link">
					<h2>{a.title}</h2>
					<span>Published {new Date(a.pubDate).toLocaleDateString()}</span>
				</Link>
			);
		});
	}

	return (
		<main id="blog">
			<section>
				<div className="medium-container">
					<h1 className="center-title">Blogs</h1>
					{makeArticles()}
					<div role="link" className="article-link soon">
						<h2>More Blogs Coming Soon!</h2>
					</div>
				</div>
			</section>
		</main>
	);
};

export default MediumArticles;
