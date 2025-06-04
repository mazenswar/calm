import React from "react";
import logo from "./assets/images/CALM logo_E4.webp";
import linkedinLogo from "./assets/images/LI-In-Bug.png";
import instagramLogo from "./assets/images/Instagram.webp";
import Image from "next/image";
import jb from "./assets/images/jckap.webp";
import PsychologyToday from "./PsychologyToday";
import Zencare from "./Zencare";
import Diversity from "./Diversity";
import "../scss/components/_footer.scss";
function Footer() {
	return (
		<footer>
			<TopBanner />
			<Diversity />
			<section className="bottom-banner">
				<Image src={logo} alt="logo" width={200} />
				<div className="contact-info">
					<span>Center for Anxiety and Life Management</span>
					<p>
						Serving thoughtful adults across New York, New Jersey, and
						Pennsylvania through virtual, integrative therapy.
					</p>
					<a href="tel: 9145704196">
						<span>(914) 570-4196</span>
					</a>
					<a href="mailto: info@calmtherapy.center">
						<span>info@calmtherapy.center</span>
					</a>
					<div className="social-links">
						<a
							href="https://www.linkedin.com/company/center-for-anxiety-and-life-management-calm-therapy"
							target="_blank"
							className="linkedin-link"
						>
							<Image
								className="linkedin"
								src={linkedinLogo}
								alt="linkedin-logo"
							/>
						</a>
						<a
							href="https://www.instagram.com/calmtherapy.center/"
							target="_blank"
							className="instagram-link"
						>
							<Image
								className="instagram"
								src={instagramLogo}
								alt="instagram-logo"
							/>
						</a>
					</div>
				</div>
			</section>
			<section className="copyright">
				<p>© 2025 Center for Anxiety and Life Management</p>
				<a href="/privacyPolicy" className="link">
					Privacy Policy
				</a>
			</section>
		</footer>
	);
}

function Journey() {
	return (
		<a
			href="https://www.journeyclinical.com/"
			target="_blank"
			id="journey"
			className="img-container"
		>
			<Image src={jb} alt="journey-logo" width={200} height={200} />
		</a>
	);
}
function TopBanner() {
	return (
		<section className="top-banner">
			<Journey />
			<PsychologyToday />
			<Zencare />
		</section>
	);
}

export default Footer;
