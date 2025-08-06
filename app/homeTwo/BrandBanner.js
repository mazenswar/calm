import Image from "next/image";
import React from "react";
import brainImgTwo from "./assets/brain-2.webp";
import "./brand__banner.scss";
function BrandBanner() {
	return (
		<section id="brand__banner">
			<div className="content">
				<div className="text">
					<h2 className="tagline">
						Therapy rooted in science, soul, and the sacred mess of being human.
					</h2>
					<p>
						Together, we{"'"}ll find your way forward with grounded therapy that
						respects both your pain and your potential.
					</p>
				</div>
				<div className="img-container tall">
					<Image
						src={brainImgTwo.src}
						alt="balance science and spirituality"
						width={480}
						height={360}
						sizes="(max-width: 768px) 300px, 480px"
						style={{ width: "100%", height: "auto" }}
					/>
				</div>
			</div>
		</section>
	);
}

export default BrandBanner;
