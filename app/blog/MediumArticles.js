"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Article from "./Article";

const MediumArticles = ({ articles, setMainArticle }) => {
	// console.log(articles);
	function makeArticles() {
		return articles.map((a) => (
			<div
				role="link"
				className="article-link"
				onClick={() => setMainArticle(a)}
			>
				<h2>{a.title}</h2>
				<span>Published {new Date(a.pubDate).toLocaleDateString()}</span>
			</div>
		));
	}
	return (
		<div className="medium-container">
			<h1 className="center-title">Blogs</h1>
			{makeArticles()}
			<div role="link" className="article-link soon">
				<h2>New Blogs Coming Soon</h2>
			</div>
		</div>
	);
};

export default MediumArticles;
