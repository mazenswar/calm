import React from "react";
import Image from "next/image";
import bookingImg from "./assets/images/bookingbrain.png";

function ContactText() {
	return (
		<div className="contact-text">
			<div className="img-container">
				<Image
					src={bookingImg.src}
					alt="contact us illustration"
					width={360}
					height={360}
					style={{ width: "100%", height: "auto" }}
					priority
				/>
			</div>
			<h1 className="center-title">Get in Touch</h1>
			<h2 className="linebreak topb">
				Whether you{"'"}re ready to book a consultation, have a question about
				our services, or want to explore a professional collaboration, we{"'"}
				re glad you{"'"}re here.
			</h2>

			{/* <h3>Ready to Get Started?</h3>
			<h3>Fill Out This Form and We Will Get Back to You in 24 Hours</h3> */}

			{/* <ul id="contact-info">
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
			</ul> */}
		</div>
	);
}

export default ContactText;
