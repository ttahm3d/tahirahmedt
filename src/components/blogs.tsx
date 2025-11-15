/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getPostsFromHashnode } from "@/lib/api";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState<any>();
  const getBlogposts = () => {
    getPostsFromHashnode().then((res) => setBlogs(res));
  };

  useEffect(() => {
    getBlogposts();
  }, []);

  console.log(blogs);

  return (
    <section className="max-w-6xl mx-auto w-full px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-4">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-12 p-8 gap-8 mx-auto">
        {blogs?.publication.posts.edges.map((post: any) => (
          <div
            key={post.node.id}
            className="p-4 hover:border rounded-[4px] transition-all flex flex-col justify-between
                border border-gray-6  ease-linear hover:border-gray-8"
          >
            <h3 className="text-lg text-accent-11 font-medium pb-2">
              <a
                href={post.node.url}
                target="_blank"
                rel="tahirahmedt.com"
                className="cursor-pointer hover:underline decoration-accent-12"
              >
                {post.node.title}&nbsp;
              </a>
            </h3>
            <div className="flex gap-2 flex-wrap">
              {post.node.tags.map((tag: any) => (
                <div
                  className="text-xs grid place-items-center 
                      font-medium py-1 px-2 bg-gray-3 text-gray-11 border-2 rounded-3xl border-gray-6"
                  key={tag.id}
                >
                  {tag.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
