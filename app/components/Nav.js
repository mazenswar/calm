"use client";

import { useEffect, useState } from "react";

import ScheduleButton from "./ScheduleButton";
import Image from "next/image";

import horLogo from "./assets/images/hor-logo.png";

import useResizeWatcher from "../hooks/useResizeWatcher";

export default function Nav() {
	const [menuClicked, setMenuClicked] = useState(false);

	const { width } = useResizeWatcher();

	useEffect(() => {
		document.documentElement.style.setProperty("--children", children);
		document.documentElement.style.setProperty("--nav-height", height);
	}, [width]);

	return (
		<nav>
			<div role="heading" aria-level="1" className="header">
				<a href="/">
					<Image className="logo" src={horLogo} alt="logo" />
				</a>
			</div>
			<ul className={menuClicked ? "navigation active" : "navigation"}>
				<li>
					<a href="/" onClick={() => setMenuClicked(false)}>
						Home
					</a>
				</li>
				<li>
					<a href="/about" onClick={() => setMenuClicked(false)}>
						About
					</a>
				</li>
				<li>
					<a href="/services" onClick={() => setMenuClicked(false)}>
						Fees
					</a>
				</li>
				<li>
					<a href="/specialities" onClick={() => setMenuClicked(false)}>
						Specialities
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
