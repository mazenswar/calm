import React from "react";
import med from "./assets/images/girl.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendar,
	faEnvelope,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
function ContactText() {
	return (
		<div className="contact-text">
			<div
				role="image"
				className="image"
				style={{ backgroundImage: `url("${med.src}")` }}
				alt="meditating in nature"
			></div>
			<h1 className="center-title">Book a free 15-minute consultation</h1>
			<h2 className="linebreak topb">
				At this time, we are only able to provide online services to patients
				located in New York, New Jersey & Pennsylvania but hope to expand to
				more areas soon. Thank you for your understanding and support.
			</h2>
			<p>You can request a free 15-minute consultation by:</p>
			<ul id="contact-info">
				<li>
					<FontAwesomeIcon icon={faCalendar} size="2x" color="var(--three)" />
					<a className="clink" disabled>
						Use the calendar below to book an appointment
					</a>
				</li>

				<li>
					<FontAwesomeIcon icon={faPhone} size="2x" color="var(--three)" />
					<a className="clink" href="tel:9145704196">
						(914) 570-4196
					</a>
				</li>

				<li>
					<FontAwesomeIcon icon={faEnvelope} size="2x" color="var(--three)" />

					<a className="clink" href="mailto:tsingh@calmtherapy.center">
						tsingh@calmtherapy.center
					</a>
				</li>
			</ul>
		</div>
	);
}

export default ContactText;
