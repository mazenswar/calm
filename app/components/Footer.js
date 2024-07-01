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
					<span>(908) 991-7301</span>
				</div>
			</section>
			<section className="copyright">
				<p>© 2024 Center for Anxiety and Life Management</p>
			</section>
		</footer>
	);
}

export default Footer;
