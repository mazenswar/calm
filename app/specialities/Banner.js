import Image from "next/image";
import React from "react";
import connect from "./assets/images/connect.png";
function Banner() {
	return (
		<div
			className="banner-container"
			style={{
				backgroundImage: `url(${connect.src})`,
			}}
		></div>
	);
}

export default Banner;
