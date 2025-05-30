"use client";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function GTM() {
	useEffect(() => {
		TagManager.initialize({ gtmId: "GTM-KM38SGKS" });
	}, []);

	return <></>;
}

export default GTM;
