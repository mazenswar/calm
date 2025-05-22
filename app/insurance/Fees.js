import React from "react";
import invImg from "./assets/images/inv.png";
import Image from "next/image";

function Fees() {
	return (
		<section id="fees">
			<div className="intro">
				<div className="img-container">
					<Image
						src={invImg.src}
						alt="illustration"
						width={360}
						height={360}
						priority
					/>
				</div>
				<div className="text">
					<h3>Therapy is an Investment in You</h3>
					<p>
						We understand that therapy is a financial commitment. It can feel
						like a lot, and that feeling is valid. But therapy is more than just
						a service. It is a space to unravel, rebuild, and grow. It{"'"}s an
						investment in your clarity, your relationships, your sense of self,
						and your overall well-being. Each session is offered with care,
						presence, and deep experience, because you deserve support that is
						thoughtful, effective, and truly aligned with your healing.
					</p>
				</div>
			</div>
			<div className="fees-container">
				<div className="intake fee">
					<h2 className="linebreak">75 min intake </h2>
					<h2 className="price">$420</h2>
					<p>One-time session to begin therapy</p>
				</div>
				<div className="session fee">
					<h2 className="linebreak">45 min session</h2>
					<h2 className="price">$250</h2>
					<p>Ongoing weekly or biweekly sessions</p>
				</div>
			</div>
		</section>
	);
}

export default Fees;
