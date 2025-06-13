import React from "react";
import { specialities } from "../data/services";
function Specs() {
	return (
		<div className="specs">
			<div className="content">
				<h2 className="center-title">Things we can help with</h2>
				<div className="container">
					{specialities.map((s) => (
						<a href={`/specialities#` + s.id} key={s.title} className="spec">
							<p>{s.title}</p>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

export default Specs;
