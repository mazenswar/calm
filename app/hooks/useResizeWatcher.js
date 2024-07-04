"use client";
import React, { useState, useEffect } from "react";

function useResizeWatcher() {
	const [width, setWidth] = useState();

	useEffect(() => {
		if (window !== undefined) {
			setWidth(window.innerWidth);

			const handleResize = () => {
				setWidth(window.innerWidth);
			};
			window.addEventListener("resize", handleResize);

			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	}, []);
	return { width };
}

export default useResizeWatcher;
