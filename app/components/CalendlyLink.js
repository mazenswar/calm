import React from "react";

function CalendlyLink() {
	return (
		<div
			dangerouslySetInnerHTML={{
				__html: `<!-- Calendly link widget begin -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/tsingh-calmtherapy/15min'});return false;">Schedule time with me</a>
<!-- Calendly link widget end -->`,
			}}
		></div>
	);
}

export default CalendlyLink;
