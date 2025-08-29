"use client";

import React from "react";
import Frame from "react-frame-component";

const IsolatedPreview = ({ children, title = "preview", styleSheets = [] }) => (
	<Frame
		title={title}
		head={
			<>
				{styleSheets.map((href) => (
					<link key={href} rel="stylesheet" href={href} />
				))}
				<style>{"body{margin:0}"}</style>
			</>
		}
		style={{ width: "100%", height: "100%", border: "none" }}
	>
		{children}
	</Frame>
);

export default IsolatedPreview;
