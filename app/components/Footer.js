import React from "react";
import logo from "./assets/images/CALM logo_E4.png";
import Image from "next/image";
function Footer() {
	return (
		<footer>
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
				</div>
				<div className="footer-links">
					<a href="/about">
						<span>About</span>
					</a>
					<a href="/services">
						<span>Fees</span>
					</a>
					<a href="/faq">
						<span>FAQs</span>
					</a>
					<a href="/resources">
						<span>Resources</span>
					</a>
				</div>
			</section>
			<section className="copyright">
				<p>© 2024 Center for Anxiety and Life Management</p>
			</section>
		</footer>
	);
}

export default Footer;
