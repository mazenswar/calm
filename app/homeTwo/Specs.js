import React from "react";
import { specialities } from "../data/services";
function Specs() {
	return (
		<div className="specs">
			<h2 className="center-title">Things we can help with</h2>
			<div className="container">
				{specialities.map((s) => (
					<a href={`/specialities#` + s.id} key={s.title} className="spec">
						<p>{s.title}</p>
					</a>
				))}
			</div>
		</div>
	);
}

export default Specs;
