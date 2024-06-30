import Image from "next/image";
import React from "react";

function Banner({ img, backPos = "center" }) {
	return (
		<div
			className="banner-container"
			style={{
				backgroundImage: `url(${img.src})`,
				backgroundPosition: backPos,
			}}
		></div>
	);
}

export default Banner;
