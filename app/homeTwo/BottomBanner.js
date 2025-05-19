import React from "react";
import Fees from "./Fees";
import Specs from "./Specs";

function BottomBanner() {
	return (
		<section className="fs-banner">
			<Specs />
			<Fees />
		</section>
	);
}

export default BottomBanner;
