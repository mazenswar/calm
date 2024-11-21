import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Article({ title, description, closeArticle }) {
	return (
		<div className="article-container">
			<button className="icon" onClick={closeArticle}>
				<FontAwesomeIcon icon={faX} size="2x" />
			</button>
			<h1 className="center-title">{title}</h1>
			<div
				id="medium-article"
				dangerouslySetInnerHTML={{ __html: description }}
			></div>
		</div>
	);
}

export default Article;
