"use client";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function GTM({ Component, pageProps }) {
	useEffect(() => {
		TagManager.initialize({ gtmId: "GTM-XXXXXXX" }); // replace with your GTM ID
	}, []);

	return <></>;
}

export default GTM;
