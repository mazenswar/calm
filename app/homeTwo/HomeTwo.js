import React from "react";
import {
	faVideo,
	faUserCheck,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import j1 from "./assets/jr1.jpg";
import Image from "next/image";
import Specs from "./Specs";
import BottomBanner from "./BottomBanner";
import HomeBio from "./HomeBio";

function HomeTwo() {
	return (
		<main id="homeTwo">
			<section className="landing-header">
				<div className="text">
					<h1 className="linebreak">
						Center for Anxiety and Life Management {"\n"}(CALM Therapy)
					</h1>

					<h2>Mental Health is a Journey of Self-Discovery & Growth</h2>
					<h4>
						While Healing is Not Linear, with the Right Help You Can Keep Moving
						Forward
					</h4>

					<div className="icons-container">
						<div className="icon">
							<FontAwesomeIcon icon={faVideo} size="4x" color="ivory" />
							<span>Telehealth Appointments</span>
						</div>
						<div className="icon">
							<FontAwesomeIcon icon={faUserCheck} size="4x" color="ivory" />
							<span>Accepting New Patients</span>
						</div>
						<div className="icon">
							<FontAwesomeIcon icon={faLocationDot} size="4x" color="ivory" />
							<span>Serving NJ, NY & PA</span>
						</div>
					</div>
				</div>
				<div className="image" style={{ backgroundImage: `url(${j1.src})` }}>
					{/* <Image src={j1} alt="journey" /> */}
				</div>
			</section>
			<HomeBio />
			<BottomBanner />
		</main>
	);
}

export default HomeTwo;
