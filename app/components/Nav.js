"use client";

import { useEffect, useRef, useState } from "react";
// import useScreenDimensions from "../hooks/useScreenDimensions";
import dynamic from "next/dynamic";
import ScheduleButton from "./ScheduleButton";

const useScreenDimensions = dynamic(
	() => import("../hooks/useScreenDimensions"),
	{
		ssr: false,
	}
);

export default function Nav() {
	const [menuClicked, setMenuClicked] = useState(false);
	const ref = useRef(null);

	const { dimensions } = useScreenDimensions();

	useEffect(() => {
		const children =
			document.getElementsByClassName("navigation")[0].children.length;
		const height = ref.current.clientHeight + "px";
		document.documentElement.style.setProperty("--children", children);
		document.documentElement.style.setProperty("--nav-height", height);
	}, [dimensions]);

	return (
		<nav ref={ref}>
			<div role="heading" aria-level="1" className="header">
				<a href="/">
					<h1>CALM</h1>
				</a>
			</div>
			<ul className={menuClicked ? "navigation active" : "navigation"}>
				<li>
					<a href="/about" onClick={() => setMenuClicked(false)}>
						About
					</a>
				</li>
				<li>
					<a href="/services" onClick={() => setMenuClicked(false)}>
						Fees & Services
					</a>
				</li>
				<li>
					<a href="/faq" onClick={() => setMenuClicked(false)}>
						FAQs
					</a>
				</li>
				<li>
					<a href="/resources" onClick={() => setMenuClicked(false)}>
						Resources
					</a>
				</li>
				<li>
					<a href="/contact" onClick={() => setMenuClicked(false)}>
						Bookings
					</a>
				</li>
			</ul>
			<ScheduleButton />
			<div
				className={menuClicked ? "menu active" : "menu"}
				id="menu"
				onClick={() => setMenuClicked(!menuClicked)}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
}
