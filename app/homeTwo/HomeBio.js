import React from "react";
import VideoEmbed from "./VideoEmbed";

function HomeBio() {
	return (
		<section id="home-bio">
			<VideoEmbed />

			<div className="text">
				<h2>Dr. Tanya Singh</h2>
				<p>
					If you{"'"}re feeling anxious, stuck, or disconnected, you don{"'"}t
					need fixing. You need space to reconnect with yourself. I offer
					integrative therapy that blends modern psychology with ancient wisdom.
				</p>
			</div>
		</section>
	);
}

export default HomeBio;
