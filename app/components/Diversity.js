import Image from "next/image";
import React from "react";
import diversity from "./assets/images/diversity.webp";

function Diversity() {
	return (
		<section id="diversity">
			<div className="img-container">
				<Image
					src={diversity.src}
					width={360}
					height={360}
					alt="diversity illustration"
					style={{ width: "100%", height: "auto", borderRadius: "100%" }}
				/>
			</div>
			<h2>
				Committed to inclusion and respect for people of all genders, races,
				ethnicities, and identities.
			</h2>
		</section>
	);
}

export default Diversity;
