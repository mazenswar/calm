import React from "react";

function FreeResources() {
	return (
		<section className="free-resources">
			<h1 className="center-title">Free Resources</h1>

			<div className="resource-container">
				<h3>Anxiety</h3>
				<a href="https://adaa.org">
					<h4>Anxiety and Depression Association of America (ADAA)</h4>
				</a>
				<p>
					Offers a wide range of resources, including webinars, self-help tools,
					and information about different types of anxiety disorders.
				</p>

				<a href="https://www.headspace.com/headspace-meditation-app">
					<h4> Headspace (Free Basics)</h4>
				</a>
				<a href="https://hminnovations.org/meditation-app">
					<h4>Healthy Minds Program</h4>
				</a>
				<p>Free guided meditation and relaxation exercises</p>
			</div>
			<div className="resources-container">
				<h3>OCD</h3>
				<a href="https://iocdf.org">
					<h4>International OCD Foundation (IOCDF)</h4>
				</a>
				<p>
					Provides information about OCD, treatment options, and support groups.
				</p>

				<a href="https://www.treatmyocd.com">
					<h4>NOCD (Free Resources)</h4>
				</a>
				<p>Offers free educational resources and support for those with OCD.</p>
			</div>
			<div className="resource-container">
				<h3>Depression</h3>
				<a href="https://www.nimh.nih.gov/health/topics/depression">
					<h4>National Institute of Mental Health (NIMH)</h4>
				</a>
				<p>
					Offers comprehensive information on depression, including symptoms,
					treatments, and support.
				</p>

				<a href="https://www.getselfhelp.co.uk">
					{" "}
					<h4>Cognitive Behavioral Therapy (CBT) Resources</h4>{" "}
				</a>
				<p>Free self-help CBT tools and worksheets.</p>
			</div>
		</section>
	);
}

export default FreeResources;
