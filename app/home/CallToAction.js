import Image from "next/image";
import React from "react";
import loving from "./assets/loving.svg";

function CallToAction() {
	return (
		<section className="call-to-action linebreak">
			<h1 className="center-title">Begin Your Journey to Well-being Today</h1>
			<div className="text">
				<h2 className="linebreak">
					Feeling overwhelmed or stressed? {"\n"}Take the first step towards a
					healthier, happier you.
					{"\n"}Our compassionate and experienced therapists are here to support
					you on your path to mental wellness.
					{"\n"}Schedule your free consultation now and start your journey to a
					brighter future.
				</h2>
			</div>
			<div className="image-container">
				<Image src={loving} alt="loving" />
			</div>
		</section>
	);
}

export default CallToAction;
