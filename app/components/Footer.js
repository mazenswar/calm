import React from "react";
import logo from "./assets/images/CALM logo_E4.png";
import linkedinLogo from "./assets/images/LI-In-Bug.png";
import Image from "next/image";

import PsychologyToday from "./PsychologyToday";
function Footer() {
	return (
		<footer>
			<TopBanner />
			<section className="bottom-banner">
				<Image src={logo} alt="logo" width={200} />
				<div className="contact-info">
					<span>Center for Anxiety and Life Management</span>
					<a href="tel: 9089917301">
						<span>(908) 991-7301</span>
					</a>
					<a href="mailto: tsingh@calmtherapy.center">
						<span>tsingh@calmtherapy.center</span>
					</a>
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
				</div>
			</section>
			<section className="copyright">
				<p>© 2024 Center for Anxiety and Life Management</p>
				<a href="/privacyPolicy">Privacy Policy</a>
			</section>
		</footer>
	);
}

function TopBanner() {
	return (
		<section className="top-banner">
			<div className="box">
				<h4>
					Committed to Inclusion and Respect for All Genders, Races, Ethnicities
					and Identities
				</h4>
			</div>

			<PsychologyToday />
		</section>
	);
}

export default Footer;
