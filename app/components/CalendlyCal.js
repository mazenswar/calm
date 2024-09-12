import React from "react";

function CalendlyCal() {
	return (
		<div
			id="calendly-cal"
			dangerouslySetInnerHTML={{
				__html: `<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" data-url="https://calendly.com/tsingh-calmtherapy/15min?hide_gdpr_banner=1&primary_color=52489f" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->`,
			}}
		></div>
	);
}

export default CalendlyCal;
