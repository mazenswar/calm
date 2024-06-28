import React from "react";
import { questions } from "../data/faq";
function Faq() {
	return (
		<main id="faq">
			<section className="faq">
				<h1 className="center-title">Frequently Asked Questions</h1>
				<div className="questions-container">
					{questions.map((obj) => (
						<div key={obj.q} className="question-container">
							<h3>{obj.q}</h3>
							<p>{obj.a}</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}

export default Faq;
