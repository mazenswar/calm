"use client";
import React, { useEffect, useState } from "react";
import { specialities } from "../data/services";
import Banner from "../components/Banner";
import sky from "./assets/images/sky.jpg";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function truncate(str, id) {
	if (str.length > 300) {
		str = str.substring(0, 299) + "...";
	}
	return <p className="linebreak">{str}</p>;
}
///////////////////////////////////

const defaultState = {};
specialities.forEach((k) => {
	defaultState[k.id] = false;
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
				let arr = pageName.split("#");
				let id = arr[arr.length - 1];
				let currentScrollY = window.scrollY;
				let currentScrollX = window.scrollX;
				window.scrollTo(currentScrollX, currentScrollY - 90);
				if (expanded[id] === false) {
					let newState = { ...expanded, [id]: true };
					setExpanded(newState);
				}
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

	function handleClick(id) {
		setExpanded({ ...expanded, [id]: !expanded[id] });
	}

	return (
		<main id="specialities">
			<Banner img={sky} backPos="bottom" text="Areas of Speciality" />
			<section id="specialities-section">
				<div className="text">
					{specialities.map((spec) => {
						return (
							<div
								key={`speciality-${spec.id}`}
								id={spec.id}
								className={
									expanded[spec.id] ? "spec-container active" : "spec-container"
								}
							>
								<h3>{spec.title}</h3>
								<p className={expanded[spec.id] ? "content active" : "content"}>
									{spec.summary}
								</p>
								<div className="icon" onClick={() => handleClick(spec.id)}>
									<FontAwesomeIcon
										icon={expanded[spec.id] ? faArrowUp : faArrowDown}
										size="1x"
										color="var(--four)"
									/>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</main>
	);
}

export default Specialities;
