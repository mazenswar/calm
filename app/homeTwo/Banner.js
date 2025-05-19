import Image from "next/image";
import React from "react";
import brainImgTwo from "./assets/brain-2.png";

function Banner() {
	return (
		<section id="banner">
			<Image
				src={brainImgTwo.src}
				alt="balance science and spirituality"
				width={800}
				height={600}
			/>

			<div className="text">
				<h2 className="tagline">
					Therapy rooted in science, soul, and the sacred mess of being human.
				</h2>
				<h4>
					Together, we{"'"}ll find your way forward with grounded therapy that
					respects both your pain and your potential.
				</h4>
			</div>
		</section>
	);
}

export default Banner;
