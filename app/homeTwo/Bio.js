import React from "react";
import Link from "next/link";
import tt from "./assets/tanya-headshot-a1.jpg";
import Image from "next/image";
import "./bio.scss";
function Bio() {
	return (
		<section id="bio">
			<div className="content">
				<div className="img-container">
					<Image
						src={tt.src}
						alt="tanya headshot"
						width={360}
						height={360}
						style={{ width: "100%", height: "auto", borderRadius: "50%" }}
						sizes="(max-width: 768px) 280px, 480px"
					/>
				</div>
				<div className="text">
					<div className="name">
						<h1 className="center-title">Dr. Tanya Singh</h1>
						<span style={{ display: "block" }}>Director & Co-Founder</span>
						<span style={{ display: "block" }}>
							Licensed Clinical Psychologist
						</span>
					</div>
					<p>
						If you{"'"}re feeling stuck, anxious, or disconnected, you don{"'"}t
						need fixing, you need space to truly listen to yourself. I offer a
						grounded, integrative approach that weaves evidence-based psychology
						with timeless wisdom traditions.
					</p>
					<Link href="/about">More About My Approach →</Link>
				</div>
			</div>
		</section>
	);
}

export default Bio;
