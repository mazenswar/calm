import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import bb1 from "./assets/bb1.png";
import {
	faLocationDot,
	faUserCheck,
	faVideo,
} from "@fortawesome/free-solid-svg-icons";

function LandingHeader() {
	return (
		<section className="landing-header">
			<div className="floating-wrapper">
				<div className="img-container">
					<Image
						priority
						className="landing-illustration floating"
						src={bb1.src}
						alt="brain"
						width={360}
						height={360}
						sizes="(max-width: 768px) 300px, 360px"
						style={{ width: "100%", height: "auto" }}
					/>
				</div>
				<div className="shadow"></div>
			</div>

			<div className="text">
				<h2 className="tagline">
					You{"'"}re not broken. You{"'"}re becoming.
				</h2>
				<h3>
					A space for thoughtful adults navigating anxiety, perfectionism,
					spiritual uncertainty, or emotional burnout, and seeking meaningful
					change.
				</h3>

				<div className="icons-container">
					<div className="icon">
						<FontAwesomeIcon icon={faVideo} size="2x" color="var(--three)" />
						<span>Online Sessions</span>
					</div>
					<div className="icon">
						<FontAwesomeIcon
							icon={faUserCheck}
							size="2x"
							color="var(--three)"
						/>
						<span>Now Accepting Clients</span>
					</div>
					<div className="icon">
						<FontAwesomeIcon
							icon={faLocationDot}
							size="2x"
							color="var(--three)"
						/>
						<span>Licensed in NJ, NY, PA</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default LandingHeader;
