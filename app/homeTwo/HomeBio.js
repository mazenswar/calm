import React from "react";
import tanya from "./assets/tanya.png";

function HomeBio() {
	return (
		<section id="home-bio">
			<h2>Nice To Meet You</h2>
			<div className="image-container">
				<div
					role="image"
					className="image"
					style={{ backgroundImage: `url('${tanya.src}')` }}
				></div>
				<h6>Tanya Singh PhD.</h6>
				<span>
					Licensed Clinical Psychologist | Co-Founder & Director, CALM (Center
					for Anxiety and Life Management)
				</span>
			</div>
			<p className="linebreak">
				Hi! I am Dr. Tanya Singh. I am a Licensed Clinical Psychologist with a
				depth of knowledge and experience in helping people navigate their inner
				worlds. My therapeutic approach is integrative, relational, and grounded
				in a deep respect for the sacredness of human experience. I combine
				evidence-based modalities like CBT and IFS with metacognitive approaches
				to create a tailored, compassionate space for growth and healing.
				{"\n\n"}I also offer ketamine-assisted psychotherapy, which can be
				especially helpful for individuals struggling with anxiety,
				obsessive-compulsive disorders, or navigating significant life
				transitions. This approach can complement traditional therapy by
				facilitating deeper self-exploration and promoting healing in new ways.
				{"\n\n"}
				My goal is to help clients feel seen, understood, and empowered to
				discover their true potential. If you{"'"}re ready to take the next step
				in your journey, please schedule a free consultation call with me. I
				look forward to speaking with you!
			</p>
		</section>
	);
}

export default HomeBio;
