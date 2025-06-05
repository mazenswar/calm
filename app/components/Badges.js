import Image from "next/image";
import Link from "next/link";
import React from "react";
import jb from "./assets/images/jckap.webp";
import amhc from "./assets/images/amhc.webp";
import ptLogo from "./assets/images/pt.webp";
import zencareLogo from "./assets/images/zencare.webp";

function Badges() {
	return (
		<section className="badges">
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
			<Link
				href="https://www.asianmhc.org/therapists/tanya-singh-ph-d/"
				target="_blank"
				id="amhc"
				className="img-container"
			>
				<Image src={amhc} alt="journey-logo" width={300} height={100} />
			</Link>
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
			<Link
				href="https://www.journeyclinical.com/"
				target="_blank"
				id="journey"
				className="img-container"
			>
				<Image src={jb} alt="journey-logo" width={200} height={200} />
			</Link>
		</section>
	);
}

export default Badges;
