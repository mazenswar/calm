"use client";
import React, { useEffect, useState } from "react";

import { questions } from "../data/faq";
// import Banner from "../components/Banner";

// export const metadata = {
// 	title: "Frequently Asked Questions",
// 	description: "Common about therapy, services and fees",
// };
// import connect from "./assets/images/connect.png";

import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function truncate(str, id) {
	if (str.length > 250) {
		str = str.substring(0, 249) + "...";
	}
	return <p className="linebreak">{str}</p>;
}
///////////////////////////////////

const defaultState = {};
questions.forEach((ele) => {
	defaultState[ele.q] = false;
});

function page() {
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

	function handleClick(key) {
		setExpanded({ ...expanded, [key]: !expanded[key] });
	}

	return (
		<main id="faq">
			{/* <Banner img={connect} /> */}
			<section id="faq-section">
				<h1 className="center-title">Common Questions</h1>
				<div className="text">
					{questions.map((ele) => {
						return (
							<div
								key={`faq-${ele.id}`}
								id={ele.id}
								className={
									expanded[ele.q] ? "faq-container active" : "faq-container"
								}
							>
								<h3>{ele.q}</h3>
								<p
									className={
										expanded[ele.q]
											? "content active linebreak"
											: "content linebreak"
									}
								>
									{ele.a}
								</p>
								<div className="icon" onClick={(e) => handleClick(ele.q)}>
									<FontAwesomeIcon
										icon={expanded[ele.q] ? faArrowUp : faArrowDown}
										size="1x"
										color="var(--three)"
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

export default page;
