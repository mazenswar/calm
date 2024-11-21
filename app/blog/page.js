"use client";
import React, { useState, useEffect } from "react";
import MediumArticles from "./MediumArticles";
import Article from "./Article";

function page() {
	const [mainArticle, setMainArticle] = useState(false);
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		fetch(
			"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tsingh_3014"
		)
			.then((res) => res.json())
			.then((data) => setArticles(data.items));
	}, []);
	return (
		<main id="blog">
			<section>
				{mainArticle ? (
					<Article
						title={mainArticle.title}
						description={mainArticle.description}
						closeArticle={() => setMainArticle(false)}
					/>
				) : (
					<MediumArticles articles={articles} setMainArticle={setMainArticle} />
				)}
			</section>
		</main>
	);
}

export default page;
