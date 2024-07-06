import React from "react";
import tanya from "./assets/tanya.png";
function Bio() {
	return (
		<section className="home-bio">
			<div className="text">
				<h1 className="center-title">Dr. Tanya Singh, Ph.D.</h1>
				<p>
					Welcome to the Center for Anxiety and Life Management (CALM). As the
					co-founder and Director, I am dedicated to helping you overcome
					anxiety-related disorders and navigate life{"'"}s challenges with
					confidence. I specialize in treating anxiety and obsessive-compulsive
					related disorders, including Generalized Anxiety Disorder, Social
					Anxiety Disorder, Obsessive-Compulsive Disorder, Perfectionism, Body
					Dysmorphia, and managing significant life transitions.
				</p>
				<p>
					Being a clinical psychologist is incredibly rewarding for me, both
					professionally and personally. I cherish the opportunity to meet
					individuals from diverse backgrounds and gain deep insights into their
					experiences. My aim is to provide the best possible psychological care
					using a holistic and person-centered approach that emphasizes seeing
					the individual beyond the illness. With over a decade of experience in
					psychology, I{"'"}ve been trained in various settings by remarkable
					mentors, shaping my skills and fueling my passion to help others
					navigate life{"'"}s challenges.
				</p>
				<p>
					Growing up in India and moving to the US for my undergraduate studies
					has given me a unique perspective and identity. My
					values—authenticity, service, curiosity, integrity, loyalty,
					tolerance, courage and respect for everyone
					{"'"}s dignity—are influenced by both cultures and guide my everyday
					interactions.
				</p>
				<p>
					In my free time, I enjoy learning new things, traveling, playing video
					games, exploring new cuisines, watching movies, and taking nature
					walks. I also have a keen interest in understanding the nature of
					consciousness, Buddhism, spirituality, and philosophy.
				</p>
			</div>
			<div className="image-container">
				<div
					className="image"
					style={{ backgroundImage: `url(${tanya.src})` }}
				></div>
			</div>
		</section>
	);
}

export default Bio;
