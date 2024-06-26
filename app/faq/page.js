import React from "react";
import { questions } from "../data/faq";
function Faq() {
	return (
		<main>
			<section className="faq">
				<h1 className="center-title">Frequently Asked Questions</h1>
				{questions.map((obj) => (
					<>
						<h3 key={obj.q}>{obj.q}</h3>
						<p>{obj.a}</p>
					</>
				))}
			</section>
		</main>
	);
}

export default Faq;
