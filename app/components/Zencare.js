import React from "react";

function Zencare() {
	return (
		<div
			className="zc"
			dangerouslySetInnerHTML={{
				__html: `<iframe title="Zencare Therapist Badge" style="width: 250px; height: 77px; border: none"  src="https://zencare.co/embed/trust-badge?z=eyJpZCI6MTQwMjcsImNvbG9yIjoid2hpdGUifQ%3D%3D"></iframe>`,
			}}
		></div>
	);
}

export default Zencare;
