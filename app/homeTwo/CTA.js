import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import tt from "./assets/tanya-headshot-a1.jpg";
import Image from "next/image";
function CTA() {
	return (
		<section id="cta">
			<div className="img-container">
				<Image
					priority
					src={tt.src}
					alt="tanya headshot"
					width={480}
					height={360}
					style={{ width: "100%", height: "auto", borderRadius: "50%" }}
					sizes="(max-width: 768px) 280px, 480px"
				/>
			</div>
			<div className="text">
				<div className="name">
					<h1 className="center-title">Dr. Tanya Singh</h1>
					<span>Director & Co-Founder</span>
					<span>Licensed Clinical Psychologist</span>
				</div>
				<h4>
					If you{"'"}re feeling stuck, anxious, or disconnected, you don{"'"}t
					need fixing, you need space to truly listen to yourself. I offer a
					grounded, integrative approach that weaves evidence-based psychology
					with timeless wisdom traditions.
				</h4>
				<Link href="/about">
					More About My Approach
					<FontAwesomeIcon
						icon={faArrowCircleRight}
						size="2x"
						color="var(--three)"
					/>
				</Link>
			</div>
		</section>
	);
}

export default CTA;
