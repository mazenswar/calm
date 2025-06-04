import React from "react";
import zencareLogo from "./assets/images/zencare.webp";
import Image from "next/image";
import Link from "next/link";

function Zencare() {
	return (
		<Link
			id="zc"
			href="https://zencare.co/provider/therapist/tanya-singh"
			target="_blank"
		>
			<Image
				src={zencareLogo.src}
				alt="zencare logo"
				width={320}
				height={100}
			/>
		</Link>
	);
}

export default Zencare;
