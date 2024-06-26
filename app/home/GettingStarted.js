import Image from "next/image";
import React from "react";
import reading from "./assets/reading.svg";

function GettingStarted() {
	return (
		<section className="home-get-started">
			<h1 className="center-title">Ready to get started?</h1>
			<h2>
				Beginning therapy can be a significant step toward improving your mental
				health and overall well-being. Here{"'"}s what you can expect when you
				start:
			</h2>
			<div className="text">
				<h2>1. Let{"'"}s talk</h2>
				<p>
					Your journey typically begins with an initial consultation. This
					consultation is designed to help me understand your concerns,
					background, and goals. It{"'"}s an opportunity for you to ask
					questions, learn and ensure you feel comfortable with the therapeutic
					process.
				</p>
				<h2>2. Initial assessment</h2>
				<p>
					I will conduct a thorough assessment to gain a deeper understanding of
					where you are in your mental health journey. This may involve
					discussing your history, current challenges, and any symptoms you{"'"}
					re experiencing. Together, we will set realistic and achievable goals
					tailored to your specific needs and circumstances.
				</p>
				<h2>3. Regular Sessions</h2>
				<p>
					Therapy sessions are typically scheduled on a weekly or bi-weekly
					basis, depending on your needs and availability. Each session lasts
					about 45 minutes. Regular attendance is important to maintain progress
					and momentum in your therapeutic journey.
				</p>
			</div>
			<div className="image-container">
				<Image src={reading} alt="reading" />
			</div>
		</section>
	);
}

export default GettingStarted;
