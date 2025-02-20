// 470
// 560
"use client";
import React, { useEffect } from "react";
import YouTube from "react-youtube";
import useResizeWatcher from "../hooks/useResizeWatcher";

let opts = {
	height: 430,
	width: 360,
	playerVars: {
		autoplay: 1, // Auto-play the video
		controls: 1, // Show player controls
		rel: 0, // No related videos at the end
		modestbranding: 1, // Minimal YouTube branding
		showinfo: 0, // Hide video title at start
	},
};
const ogWidth = { height: 560, width: 470 };
const smWidth = { height: 460, width: 370 };
const VideoEmbed = () => {
	const { width } = useResizeWatcher();

	// useEffect(() => {
	// 	if (width > 500) {
	// 		opts = { ...opts, ...ogWidth };
	// 	} else {
	// 		opts = { ...opts, ...smWidth };
	// 	}
	// 	console.log(width);
	// 	console.log(opts);
	// }, [width]);
	// Function to ensure HD playback
	const onPlayerReady = (event) => {
		const player = event.target;
		player.setPlaybackQuality("hd1080"); // Force HD quality
	};

	return (
		<YouTube videoId={"iomZ0rRB1OI"} opts={opts} onReady={onPlayerReady} />
	);
};

export default VideoEmbed;
