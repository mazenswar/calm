import React from "react";
import Fees from "./Fees";
import Specs from "./Specs";

function BottomBanner() {
	return (
		<section className="fs-banner">
			<div className="content">
				<Specs />
				<Fees />
			</div>
		</section>
	);
}

export default BottomBanner;
