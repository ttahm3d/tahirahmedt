/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getPostsFromHashnode } from "@/lib/api";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const getBlogposts = () => {
    setLoading(true);
    getPostsFromHashnode()
      .then((res) => setBlogs(res))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getBlogposts();
  }, []);

  return (
    <section className="max-w-6xl mx-auto w-full px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-4">Latest Blog Posts</h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 pt-12 md:p-8 gap-8 mx-auto">
          {[1, 2, 3, 4].map((loader) => (
            <div
              key={loader}
              className="p-4 h-[126px] rounded-md border border-gray-6 animate-pulse"
            >
              <div className="h-6 bg-gray-4 rounded w-3/4 mb-4"></div>
              <div className="flex gap-2 flex-wrap">
                <div className="h-5 bg-gray-4 rounded w-16"></div>
                <div className="h-5 bg-gray-4 rounded w-12"></div>
                <div className="h-5 bg-gray-4 rounded w-20"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 pt-12 md:p-8 gap-8 mx-auto">
          {blogs?.publication.posts.edges.map((post: any) => (
            <div
              key={post.node.id}
              className="p-4 hover:border rounded-md transition-all flex flex-col justify-between
                border border-gray-6 hover:bg-gray-3 ease-linear hover:border-gray-7"
            >
              <h3 className="text-lg text-accent-11 font-medium pb-2">
                <a
                  href={post.node.url}
                  target="_blank"
                  rel="tahirahmedt.com"
                  className="cursor-pointer hover:underline decoration-accent-11 hover:underline-offset-2"
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
      )}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 pt-12 md:p-8 gap-8 mx-auto">
        {blogs?.publication.posts.edges.map((post: any) => (
          <div
            key={post.node.id}
            className="p-4 hover:border rounded-md transition-all flex flex-col justify-between
                border border-gray-6 hover:bg-gray-3 ease-linear hover:border-gray-7"
          >
            <h3 className="text-lg text-accent-11 font-medium pb-2">
              <a
                href={post.node.url}
                target="_blank"
                rel="tahirahmedt.com"
                className="cursor-pointer hover:underline decoration-accent-11 hover:underline-offset-2"
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
      </div> */}
      <div className="flex justify-center">
        <a
          target="_blank"
          rel="tahirahmedt.com"
          href="https://blog.tahirahmedt.com"
          className="bg-accent-3 border cursor-pointer border-accent-7 hover:text-accent-10 hover:bg-accent-4 hover:ring-2 ring-offset-2 hover:ring-accent-9 transition-colors text-accent-10 px-4 py-2 rounded-3xl"
        >
          Read all articles
        </a>
      </div>
    </section>
  );
}
