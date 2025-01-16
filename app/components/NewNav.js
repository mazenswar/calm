"use client";
import React, { useEffect, useRef, useState } from "react";
import horLogo from "./assets/images/hor-logo.png";
import verLogo from "./assets/images/CALM logo_E4.png";
import Image from "next/image";
import useResizeWatcher from "../hooks/useResizeWatcher";

function NewNav() {
	const { width } = useResizeWatcher();
	const [menuOpen, setMenuOpen] = useState(false);
	const [serviceSubmenu, setServiceSubmenu] = useState(false);
	const [resourcesSubmenu, setResourcesSubmenu] = useState(false);
	const [isMobile, setIsMobile] = useState(true);

	const ref = useRef();

	useEffect(() => {
		if (width < 900 && !isMobile) {
			setIsMobile(true);
		} else if (isMobile) {
			setIsMobile(false);
		}
		const height = ref.current.clientHeight + "px";
		document.documentElement.style.setProperty("--nav-height", height);
	}, [width]);

	// const logo = isMobile ? verLogo : horLogo;

	return (
		<nav ref={ref}>
			<div className="logo-container">
				<a href="/">
					{/* <Image src={isMobile ? verLogo : horLogo} alt="calm logo" /> */}
					<Image src={horLogo} alt="calm logo" />
				</a>
			</div>

			<div id="ham-menu">
				<div
					className={
						menuOpen ? "menu-icon-container change" : "menu-icon-container"
					}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<div className={"bar1"}></div>
					<div className={"bar2"}></div>
					<div className={"bar3"}></div>
				</div>
			</div>

			<ul className={menuOpen ? "nav-links active" : "nav-links"}>
				<li>
					<a href="/">Home</a>
				</li>
				<li className="dropdown">
					<a disabled>Services</a>
					<button onClick={() => setServiceSubmenu(!serviceSubmenu)}>
						{serviceSubmenu ? "x" : "▽"}
					</button>
					<ul className={serviceSubmenu ? "submenu active" : " submenu"}>
						<li>
							<a href="/specialities">Specialities</a>
						</li>
						<li>
							<a href="/kap">Ketamine</a>
						</li>
						<li>
							<a href="/#fees">Fees</a>
						</li>
						<li>
							<a href="/insurance">Insurance</a>
						</li>
						<li>
							<a href="/groups">Groups</a>
						</li>
					</ul>
				</li>

				<li>
					<a href="/#home-bio">About</a>
				</li>
				<li className="dropdown">
					<a disabled>Resources</a>
					<button onClick={() => setResourcesSubmenu(!resourcesSubmenu)}>
						{resourcesSubmenu ? "x" : "▽"}
					</button>
					<ul className={resourcesSubmenu ? "submenu active" : " submenu"}>
						<li>
							<a href="/blog">Blog</a>
						</li>
						<li>
							<a href="/faq">FAQs</a>
						</li>
						<li>
							<a href="/assessments">Assesments</a>
						</li>
						<li>
							<a href="/resources">Free Resources</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="/contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
}

export default NewNav;
