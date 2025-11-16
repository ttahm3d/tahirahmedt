import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

interface BlogPostProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/posts");
  const files = fs.readdirSync(postsDir);
  return files.map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "src/posts", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data: metadata, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <article className="max-w-6xl mx-auto px-4 py-12">
      <h1>{metadata.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
