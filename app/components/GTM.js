"use client";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function GTM() {
	useEffect(() => {
		const timer = setTimeout(() => {
			TagManager.initialize({ gtmId: "GTM-KM38SGKS" });
		}, 3000); // delay GTM load by 3 seconds after page load

		return () => clearTimeout(timer);
	}, []);

	return <></>;
}

export default GTM;
