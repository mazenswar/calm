import Image from "next/image";
import React from "react";

function Banner({ img, backPos = "center", bacSize = "cover", text = "" }) {
	return (
		<div
			className="banner-container"
			style={{
				backgroundImage: `url(${img.src})`,
				backgroundPosition: backPos,
				backgroundSize: bacSize,
			}}
		>
			<h1>{text}</h1>
		</div>
	);
}

export default Banner;
