import React from "react";
import CallToAction from "./CallToAction";
import Bio from "./Bio";
import GettingStarted from "./GettingStarted";
import quoteBg from "./assets/sky.jpg";
import HomeSpecialities from "./HomeSpecialities";
import Schedule from "./Schedule";

///////////////////////////

function QuoteSection() {
	return (
		<section
			className="quote-section"
			style={{ backgroundImage: `url(${quoteBg.src})` }}
		>
			<div className="text">
				<h1>
					“Until you make the unconscious conscious, it will direct your life
					and you will call it fate.”
					<span>— Carl Jung</span>
				</h1>
			</div>
		</section>
	);
}
///////////////////////////
function Home() {
	return (
		<main id="home">
			<QuoteSection />
			<CallToAction />

			<Bio />
			<HomeSpecialities />

			<GettingStarted />
			<Schedule />
		</main>
	);
}

export default Home;
