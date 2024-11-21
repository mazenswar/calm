"use client";
import React, { useState } from "react";
import KapBox, {
	Eight,
	Five,
	Four,
	Nine,
	One,
	Seven,
	Six,
	Three,
	Two,
} from "./KapBox";
import Banner from "../components/Banner";
import gg from "./assets/images/sunset1.jpg";

const defaultState = {
	one: false,
	two: false,
	three: false,
	four: false,
	five: false,
	six: false,
	seven: false,
	eight: false,
	nine: false,
};

function KAP() {
	const [state, setState] = useState(defaultState);

	function handleClick(id) {
		let provState = { ...state };
		// for (const key in provState) {
		// 	provState[key] = false;
		// }
		let newState = { ...provState, [id]: !state[id] };
		setState(newState);
	}

	return (
		<main id="kap-page">
			<Banner img={gg} text="Ketamine-Assisted Psychotherapy (KAP)" />
			<section id="kap">
				<KapBox state={state.one} handleClick={handleClick} id="one">
					<One />
				</KapBox>
				<KapBox state={state.two} handleClick={handleClick} id="two">
					<Two />
				</KapBox>
				<KapBox state={state.three} handleClick={handleClick} id="three">
					<Three />
				</KapBox>
				<KapBox state={state.four} handleClick={handleClick} id="four">
					<Four />
				</KapBox>
				<KapBox state={state.five} handleClick={handleClick} id="five">
					<Five />
				</KapBox>
				<KapBox state={state.six} handleClick={handleClick} id="six">
					<Six />
				</KapBox>
				<KapBox state={state.seven} handleClick={handleClick} id="seven">
					<Seven />
				</KapBox>
				<KapBox state={state.eight} handleClick={handleClick} id="eight">
					<Eight />
				</KapBox>

				<KapBox state={state.nine} handleClick={handleClick} id="nine">
					<Nine />
				</KapBox>
			</section>
		</main>
	);
}

export default KAP;
