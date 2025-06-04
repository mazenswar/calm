"use client";
import React, { useState } from "react";
import Image from "next/image";
import horLogo from "./assets/images/hor-logo.webp";
import "../scss/components/_new-nav.scss";

// Utility: detect if device supports hover
const canHover =
	typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

const navItems = [
	{ label: "Home", href: "/" },
	{
		label: "Services",
		submenu: [
			{ label: "Specialities", href: "/specialities" },
			{ label: "KAP", href: "/kap" },
			{ label: "Fees & Insurance", href: "/insurance" },
		],
	},
	{ label: "About", href: "/about" },
	{
		label: "Resources",
		submenu: [
			{ label: "Blog", href: "/blog" },
			{ label: "FAQs", href: "/faq" },
		],
	},
	{ label: "Contact", href: "/contact" },
];

function NavItem({ item }) {
	const [open, setOpen] = useState(false);

	return (
		<li className="nav-item">
			{item.submenu ? (
				<>
					<button
						type="button"
						className={`nav-link has-submenu${open ? " open" : ""}`}
						onClick={() => {
							if (!canHover) setOpen((prev) => !prev);
						}}
					>
						{item.label}
					</button>
					<ul className={`submenu${open ? " open" : ""}`}>
						{item.submenu.map((sub) => (
							<li key={sub.href}>
								<a href={sub.href} className="submenu-link">
									{sub.label}
								</a>
							</li>
						))}
					</ul>
				</>
			) : (
				<a href={item.href} className="nav-link">
					{item.label}
				</a>
			)}
		</li>
	);
}

export default function NewNav() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="new-nav">
			<div className="nav-container">
				<div className="logo">
					<a href="/" className="img-container">
						<Image src={horLogo} alt="CALM logo" width={400} height={100} />
					</a>
				</div>

				<div
					className={`hamburger${menuOpen ? " open" : ""}`}
					onClick={() => setMenuOpen((prev) => !prev)}
				>
					<span className="bar" />
					<span className="bar" />
					<span className="bar" />
				</div>

				<ul className={`nav-list${menuOpen ? " open" : ""}`}>
					{navItems.map((item) => (
						<NavItem key={item.label} item={item} />
					))}
				</ul>
			</div>
		</nav>
	);
}
