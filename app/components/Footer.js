import React from "react";
import logo from "./assets/images/CALM logo_E4.webp";
import linkedinLogo from "./assets/images/LI-In-Bug.png";
import instagramLogo from "./assets/images/Instagram.webp";
import Image from "next/image";

import Diversity from "./Diversity";
import "../scss/components/_footer.scss";
import Link from "next/link";
import Badges from "./Badges";
function Footer() {
	return (
		<footer>
			<Diversity />
			<Badges />
			<section className="bottom-banner">
				<div className="content">
					<div className="img-container">
						<Image src={logo} alt="logo" width={200} />
					</div>
					<div className="contact-info">
						<span>Center for Anxiety and Life Management</span>
						<p>
							Serving thoughtful adults across New York, New Jersey, and
							Pennsylvania through virtual, integrative therapy.
						</p>
						<Link className="link" href="tel: 9145704196">
							(914) 570-4196
						</Link>
						<Link className="link" href="mailto: info@calmtherapy.center">
							info@calmtherapy.center
						</Link>
						<div className="social-links">
							<Link
								href="https://www.linkedin.com/company/center-for-anxiety-and-life-management-calm-therapy"
								target="_blank"
								className="linkedin-link"
							>
								<Image
									className="linkedin"
									src={linkedinLogo}
									alt="linkedin-logo"
								/>
							</Link>
							<Link
								href="https://www.instagram.com/calmtherapy.center/"
								target="_blank"
								className="instagram-link"
							>
								<Image
									className="instagram"
									src={instagramLogo}
									alt="instagram-logo"
								/>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="copyright">
				<div className="content">
					<small>
						© 2025 CALM Therapy · Site by
						<Link
							href="https://mazenswar.dev"
							target="_blank"
							rel="noopener"
							className="link designer-link"
						>
							Mazen Alswar
						</Link>
					</small>

					<Link href="/privacyPolicy" className="link">
						Privacy Policy
					</Link>
				</div>
			</section>
		</footer>
	);
}

export default Footer;
