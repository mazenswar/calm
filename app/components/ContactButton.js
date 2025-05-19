import Link from "next/link";
import React from "react";

function ContactButton() {
	return (
		<Link href="/contact" id="contact-button">
			Book A Consult
		</Link>
	);
}

export default ContactButton;
