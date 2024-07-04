import React from "react";
import med from "./assets/images/girl.png";
import Image from "next/image";
function ContactText() {
	return (
		<div className="contact-text">
			<h2>Begin your journey to Well-Being today! </h2>
			<p>
				Please fill out this form to request a free 15-minute consultation. At
				this time, we are only able to provide online services to patients
				located in New York and Pennsylvania but hope to expand to more areas
				soon. Thank you for your understanding and support.
			</p>
			<Image src={med} alt="meditating in nature" />
		</div>
	);
}

export default ContactText;
