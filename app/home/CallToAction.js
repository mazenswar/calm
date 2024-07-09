import Image from "next/image";
import React from "react";
import loving from "./assets/loving.svg";
import balloon from "./assets/balloon.jpg";
import ScheduleButton from "../components/ScheduleButton";

function CallToAction() {
	return (
		<section className="call-to-action linebreak">
			<h2 className="center-title title-text">
				Begin Your Journey to Well-Being Today
			</h2>

			<div className="text">
				<h4 className="linebreak">
					Are you tired of feeling stuck?{"\n\n"} Are you feeling overwhelmed by
					stress, anxiety, depression or self loathing making everyday tasks
					feel like a challenge? {"\n\n"} These struggles impact your health,
					relationships, goals and overall quality of life. {"\n\n"} You may
					experience frustration, guilt, or hopelessness, and despite your best
					efforts, the problems persist, leaving you wondering why it{"'"}s so
					hard to feel better.{"\n\n"}
				</h4>
				<h3 className="linebreak">
					<strong>
						There{"'"}s nothing wrong with you. You are doing your best with the
						resources you have. {"\n\n"}With compassionate support and effective
						strategies, you can overcome these mental health challenges. Contact
						us today to start your journey towards a more fulfilling life.
					</strong>
				</h3>
			</div>
			<div className="image-container">
				<div
					className="image"
					style={{
						backgroundImage: `url(${balloon.src})`,
					}}
				></div>
			</div>
			<section className="link-button-section">
				<h2>Online Therapy in NY and PA</h2>
				<ScheduleButton />
			</section>
		</section>
	);
}

export default CallToAction;
