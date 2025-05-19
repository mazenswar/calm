import React from "react";
import VideoEmbed from "./VideoEmbed";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import tt from "./assets/tanya-headshot-a1.jpg";
import Image from "next/image";
function CTA() {
	return (
		<section id="cta">
			{/* <VideoEmbed /> */}
			<Image src={tt.src} alt="tanya headshot" width={500} height={500} />
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
