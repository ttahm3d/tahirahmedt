import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function BlogIndex() {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(path.join(postsDir, filename), "utf8");
    const { data: metadata } = matter(fileContent);

    return { slug, metadata };
  });

  return (
    <div className="max-w-6xl mx-auto block px-4 py-16">
      <div>
        <h1 className="text-6xl font-bold text-center text-accent-12 mb-2">
          Blogs
        </h1>
        <p className="text-md text-center text-gray-11">
          These are some blogs that are off hashnode and are non-technical.
        </p>
      </div>
      <div className="p-4">
        {posts.map(({ slug, metadata }) => (
          <div key={slug} className="border border-gray-6 p-4 rounded-md">
            <Link
              className="text-2xl text-accent-11 flex flex-col"
              href={`/blogs/${slug}`}
            >
              <p>{metadata.title}</p>
            </Link>{" "}
            <p className="text-gray-11 text-normal">{metadata.description}</p>
            <p className="text-sm">{metadata.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
