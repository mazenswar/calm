import Image from "next/image";
import React from "react";
import bb1 from "./assets/bb1(small).webp";

import CTAButton from "../components/CTAButton";
import "./hero.scss";
import Link from "next/link";
import CalendlyCTA from "../components/CalendlyCTA";

function Hero() {
	return (
		<section className="hero">
			<div className="content">
				<div className="text">
					<h2 className="tagline">
						You{"'"}re not broken. You{"'"}re becoming.
					</h2>
					<p>
						Virtual therapy for thoughtful adults seeking lasting change while
						navigating anxiety, perfectionism, spiritual uncertainty, or
						emotional burnout.
					</p>
					<h4 className="sub">
						Virtual Therapy in{" "}
						<Link href="/where-we-serve" className="link">
							43 U.S. states and jurisdictions
						</Link>{" "}
						· East Coast-based
					</h4>

					<CalendlyCTA />
				</div>
				<div className="floating-wrapper">
					<div className="img-container">
						<Image
							priority
							className="landing-illustration floating"
							src={bb1.src}
							alt="brain"
							width={450}
							height={450}
							sizes="(max-width: 768px) 300px, 450px"
						/>
					</div>
					<div className="shadow"></div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
