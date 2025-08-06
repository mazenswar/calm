import Image from "next/image";
import React from "react";
import tt from "../../../homeTwo/assets/tanya-headshot-a1.jpg";

function Bio() {
	return (
		<section className="bio">
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
				<div className="bio-text">
					<h2>Meet Dr.&nbsp;Tanya Singh</h2>
					<p>
						PhD psychologist integrating exposure, somatic, and mindfulness
						approaches to help high-achieving adults calm intrusive thoughts,
						reduce anxiety, and reconnect with meaning. Licensed in NY, NJ, and
						PA; 7+ years supporting clients through evidence-based, culturally
						attuned care.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Bio;
