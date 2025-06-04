import Image from "next/image";
import React from "react";
import ptLogo from "./assets/images/pt.webp";
import Link from "next/link";

function PsychologyToday() {
	return (
		<Link
			id="pt"
			className="img-container"
			href="https://www.psychologytoday.com/us/therapists/tanya-singh-edison-nj/1338674"
			target="_blank"
		>
			<Image
				src={ptLogo.src}
				alt="psychology today logo"
				width={300}
				height={100}
			/>
		</Link>
	);
}

export default PsychologyToday;
