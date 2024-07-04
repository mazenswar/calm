"use client";
import { isMobile } from "react-device-detect";

import { useEffect, useRef, useState } from "react";
// import useScreenDimensions from "../hooks/useScreenDimensions";
import dynamic from "next/dynamic";
import ScheduleButton from "./ScheduleButton";
import Image from "next/image";

import horLogo from "./assets/images/hor-logo.png";
import verLogo from "./assets/images/CALM logo_E4.png";
import useResizeWatcher from "../hooks/useResizeWatcher";

export default function Nav() {
	const [menuClicked, setMenuClicked] = useState(false);
	const ref = useRef(null);
	const [logo, setLogo] = useState(horLogo);
	const { width } = useResizeWatcher();

	useEffect(() => {
		width < 650 ? setLogo(verLogo) : setLogo(horLogo);
		const children =
			document.getElementsByClassName("navigation")[0].children.length;
		const height = ref.current.clientHeight + "px";
		document.documentElement.style.setProperty("--children", children);
		document.documentElement.style.setProperty("--nav-height", height);
	}, [width]);

	return (
		<nav ref={ref}>
			<div role="heading" aria-level="1" className="header">
				<a href="/">
					<Image className="logo" src={logo} alt="logo" />
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
