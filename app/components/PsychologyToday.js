import Script from "next/script";
import React from "react";

function PsychologyToday() {
	return (
		<div
			id="pt"
			dangerouslySetInnerHTML={{
				__html: `<!-- Professional verification provided by Psychology Today -->
<a href="https://www.psychologytoday.com/profile/1338674" class="sx-verified-seal"></a>
<script type="text/javascript" src="https://member.psychologytoday.com/verified-seal.js" data-badge="12" data-id="1338674" data-code="aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy9bQkFER0VdL3Byb2ZpbGUvW1BST0ZJTEVfSURdP2NhbGxiYWNrPXN4Y2FsbGJhY2s="></script>
<!-- End Verification -->`,
			}}
		></div>
	);
}

export default PsychologyToday;
