import React from "react";
import CallToAction from "./CallToAction";
import Bio from "./Bio";
import GettingStarted from "./GettingStarted";
import quoteBg from "./assets/sky.jpg";
import HomeSpecialities from "./HomeSpecialities";
import Schedule from "./Schedule";
import Title from "./Title";

///////////////////////////
export const metadata = {
	title: "Center For Anxiety and Life Management (Calm Therapy)",
	description:
		"Online therapy services in New Jersey, New York and Pennsylvania",
	keywords: "calm, online therapy, virtual therapy",
};

function QuoteSection() {
	return (
		<section
			className="quote-section"
			style={{ backgroundImage: `url(${quoteBg.src})` }}
		>
			<div className="text">
				<p className="title-text">
					“Until you make the unconscious conscious, it will direct your life
					and you will call it fate.”
					<span>— Carl Jung</span>
				</p>
			</div>
		</section>
	);
}
///////////////////////////
function Home() {
	return (
		<main id="home">
			<QuoteSection />
			<Title />
			<CallToAction />

			<Bio />
			<HomeSpecialities />

			<GettingStarted />
			<Schedule />
		</main>
	);
}

export default Home;
