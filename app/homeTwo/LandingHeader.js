import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import bb1 from "./assets/bb1(small).webp";
import {
	faLocationDot,
	faUserCheck,
	faVideo,
} from "@fortawesome/free-solid-svg-icons";
import CTAButton from "../components/CTAButton";
import "../scss/components/_landing_header.scss";

function LandingHeader() {
	return (
		<section className="landing-header">
			<div className="content">
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
					<CTAButton />
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

export default LandingHeader;
