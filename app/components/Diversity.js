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
				Committed to Inclusion and Respect for All Genders, Races, Ethnicities
				and Identities
			</h2>
		</section>
	);
}

export default Diversity;
