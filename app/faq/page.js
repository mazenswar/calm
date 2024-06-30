import React from "react";
import { questions } from "../data/faq";
import Banner from "../components/Banner";
import sunset from "./assets/images/sunset1.jpg";
function Faq() {
	return (
		<main id="faq">
			<Banner img={sunset} backPos="right" />
			<section className="faq">
				<h1 className="center-title">Frequently Asked Questions</h1>
				<div className="questions-container">
					{questions.map((obj) => (
						<div key={obj.q} className="question-container">
							<h3>{obj.q}</h3>
							<p className="linebreak">{obj.a}</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}

export default Faq;
