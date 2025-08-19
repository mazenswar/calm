import Link from "next/link";
import React from "react";
import "./style/client_portal.scss";

function ClientPortalCTA({ text = "Book a 15-Minute Consult" }) {
	return (
		<Link
			target="_blank"
			rel="noopener noreferrer"
			href={"https://tanya-singh.clientsecure.me"}
			id="client__portal__cta"
		>
			{text}
		</Link>
	);
}

export default ClientPortalCTA;
