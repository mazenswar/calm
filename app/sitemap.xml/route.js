export async function GET() {
	const staticPages = [
		{
			url: "https://calmtherapy.center",
			lastModified: new Date().toISOString(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: "https://calmtherapy.center/blog",
			lastModified: new Date().toISOString(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: "https://calmtherapy.center/fees-and-insurance",
			lastModified: new Date().toISOString(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: "https://calmtherapy.center/specialities",
			lastModified: new Date().toISOString(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: "https://calmtherapy.center/kap",
			lastModified: new Date().toISOString(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: "https://calmtherapy.center/faq",
			lastModified: new Date().toISOString(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: "https://calmtherapy.center/contact",
			lastModified: new Date().toISOString(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: "https://calmtherapy.center/about",
			lastModified: new Date().toISOString(),
			changeFrequency: "monthly",
			priority: 0.3,
		},
		{
			url: "https://calmtherapy.center/ketamine-assisted-psychotherapy",
			lastModified: new Date().toISOString(),
			changeFrequency: "monthly",
			priority: 0.4,
		},
		{
			url: "https://calmtherapy.center/where-we-serve",
			lastModified: new Date().toISOString(),
			changeFrequency: "monthly",
			priority: 0.6,
		},
	];

	const mediumFeed = await fetch(
		"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tsingh_3014"
	).then((res) => res.json());

	const blogPages = mediumFeed.items.map((post) => {
		const id = post.guid.split("/").pop();
		return {
			url: `https://calmtherapy.center/blog/${id}`,
			lastModified: new Date(post.pubDate).toISOString(),
			changeFrequency: "monthly",
			priority: 0.6,
		};
	});

	const allPages = [...staticPages, ...blogPages];

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
				.map(
					(page) => `
        <url>
          <loc>${page.url}</loc>
          <lastmod>${page.lastModified}</lastmod>
          <changefreq>${page.changeFrequency}</changefreq>
          <priority>${page.priority}</priority>
        </url>`
				)
				.join("")}
    </urlset>`,
		{
			headers: {
				"Content-Type": "application/xml",
			},
		}
	);
}
