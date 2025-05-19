import React from "react";

function Calendly() {
	return (
		<div
			dangerouslySetInnerHTML={{
				__html: `<!-- Calendly badge widget begin -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/tsingh-calmtherapy/15min?primary_color=52489f', text: 'Book A Consult', color: '#52489f', textColor: '#ffffff', branding: undefined }); }</script>
<!-- Calendly badge widget end -->`,
			}}
		></div>
	);
}

export default Calendly;
