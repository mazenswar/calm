import React from "react";
import { specialities } from "../data/services";
import TanyaSingh from "./TanyaSingh";

export const metadata = {
	title: "about",
	description: "details about therapists' background, education and expertise",
};

function About() {
	return (
		<main id="about">
			<TanyaSingh />
		</main>
	);
}

export default About;
