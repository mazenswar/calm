import React from "react";

function TestDiv({ text }) {
	return (
		<div>
			<h2>{text}</h2>
		</div>
	);
}

function TherapyTools() {
	return (
		<section className="therapy-tools">
			<h1 className="center-title">Therapy Tools</h1>
			<div className="quiz-links">
				<TestDiv text="How to overcome anxiety" />
				<TestDiv text="How to overcome Depression" />
				<TestDiv text="How to overcome OCD" />
			</div>
		</section>
	);
}

export default TherapyTools;
