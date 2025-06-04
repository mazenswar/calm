import Image from "next/image";
import React from "react";
import brainImgTwo from "./assets/brain-2.webp";

function Banner() {
	return (
		<section id="banner">
			<div className="img-container tall">
				<Image
					priority
					src={brainImgTwo.src}
					alt="balance science and spirituality"
					width={480}
					height={360}
					sizes="(max-width: 768px) 300px, 480px"
					style={{ width: "100%", height: "auto" }}
				/>
			</div>

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
