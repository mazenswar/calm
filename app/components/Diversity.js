import Image from "next/image";
import React from "react";
import diversity from "./assets/images/diversity.jpg";

function Diversity() {
	return (
		<section id="diversity">
			<div
				className="image"
				style={{ backgroundImage: `url('${diversity.src}')` }}
				role="image"
			></div>
			<h2>
				Committed to inclusion and respect for people of all genders, races,
				ethnicities, and identities.
			</h2>
		</section>
	);
}

export default Diversity;
