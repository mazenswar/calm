"use client";
import React, { useEffect, useState } from "react";
import { specialities } from "../data/services";
import Banner from "../components/Banner";
import connect from "./assets/images/connect.png";

function truncate(str, id) {
	if (str.length > 300) {
		str = str.substring(0, 299) + "...";
	}
	return <p className="linebreak">{str}</p>;
}
///////////////////////////////////

const defaultState = {};
specialities.forEach((k) => {
	defaultState[k.title] = false;
});

////////////////////////////////////

// export const metadata = {
// 	title: "Specialities",
// 	description:
// 		"Information about mental health issues that the center can help with",
// };
//////////////////////////////////////
function Specialities() {
	const [expanded, setExpanded] = useState(defaultState);
	useEffect(() => {
		if (window) {
			const pathArr = window.location.href.split("/");
			const pageName = pathArr[pathArr.length - 1];
			if (pageName.includes("#")) {
				let currentScrollY = window.scrollY;
				let currentScrollX = window.scrollX;
				window.scrollTo(currentScrollX, currentScrollY - 90);
			}
		}
	}, []);
	///////////////////////////
	function expandButton(key) {
		if (expanded[key]) {
			return (
				<button onClick={() => setExpanded({ ...expanded, [key]: false })}>
					Read Less
				</button>
			);
		} else {
			return (
				<button onClick={() => setExpanded({ ...expanded, [key]: true })}>
					Read More
				</button>
			);
		}
	}

	return (
		<main id="specialities">
			<Banner img={connect} />
			<section id="specialities-section">
				<h1 className="center-title">Areas of Speciality</h1>
				<div className="text">
					{specialities.map((spec) => {
						return (
							<div
								key={`speciality-${spec.id}`}
								id={spec.id}
								className="spec-container"
							>
								<h3>{spec.title}</h3>
								{expanded[spec.title] ? (
									<p className="linebreak">{spec.summary}</p>
								) : (
									truncate(spec.summary)
								)}
								{expandButton(spec.title)}
							</div>
						);
					})}
				</div>
			</section>
		</main>
	);
}

export default Specialities;
