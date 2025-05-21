import fs from "fs";
import path from "path";
import Parser from "rss-parser";

const parser = new Parser();
const OUTPUT_DIR = path.join(process.cwd(), "public", "blogData");

async function generateBlogContent() {
	const feed = await parser.parseURL("https://medium.com/feed/@tsingh_3014");

	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR, { recursive: true });
	}

	for (const post of feed.items) {
		const slug = post.guid.split("/").pop();
		const filePath = path.join(OUTPUT_DIR, `${slug}.json`);
		fs.writeFileSync(filePath, JSON.stringify(post, null, 2), "utf-8");
		console.log(`✔ Saved blog: ${slug}`);
	}
}

generateBlogContent();
