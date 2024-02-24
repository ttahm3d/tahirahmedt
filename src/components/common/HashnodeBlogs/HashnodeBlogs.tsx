'use client'

import { getPostsFromHashnode } from '@/lib/api'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface IBlogs {
  mode: 'shorthand' | 'full'
}

export default function HashnodeBlogs({ mode }: IBlogs) {
  const [blogs, setBlogs] = useState<any>()
  const getBlogposts = () => {
    getPostsFromHashnode().then((res) => setBlogs(res))
  }

  useEffect(() => {
    getBlogposts()
  }, [])

  console.log(mode === 'full')
  return (
    <section className="max-w-5xl mx-auto pt-12 pb-16 min-h-[100px]">
      <h1 className="text-4xl font-bold text-center text-mint12">
        Blogs on Hashnode
      </h1>
      <>
        {mode === 'full' ? (
          <div className="grid grid-cols-1 gap-8 p-8">
            {blogs?.publication.posts.edges.map((post: any) => (
              <div
                className="bg-bronze1 border border-slate7 grid gap-4 
            hover:shadow-lg transition-all ease-in-out duration-200
            shadow-mint7 grid-cols-1 md:grid-cols-5  p-4 rounded-lg"
                key={post.node.id}
              >
                <div className="md:col-span-3">
                  <h3 className="text-lg text-mint12 font-medium">
                    <a
                      href={post.node.url}
                      target="_blank"
                      rel="tahirahmedt.com"
                      className="cursor-pointer hover:underline decoration-mint12"
                    >
                      {post.node.title}
                    </a>
                  </h3>
                  <div className="flex gap-6 py-2">
                    <small className="text-xs text-slate10 hover:underline">
                      {new Date(post.node.publishedAt).toLocaleDateString(
                        'en-US',
                        {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        },
                      )}
                    </small>
                    <small className="text-xs text-slate10 hover:underline">
                      {post.node.readTimeInMinutes} minutes
                    </small>
                    <small className="text-xs text-slate10 hover:underline">
                      {post.node.views} views
                    </small>
                  </div>
                  <p className="text-slate10 py-2 text-justify">
                    {post.node.brief}
                  </p>
                  <div className="flex gap-2">
                    {post.node.tags.map((tag: any) => (
                      <div
                        className="text-xs grid place-items-center font-medium py-1 px-2 bg-mint3 text-mint12 border rounded-3xl border-mint6"
                        key={tag.id}
                      >
                        {tag.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2 order-first md:order-none place-self-center">
                  <Image
                    src={post.node.coverImage.url}
                    alt={`${post.node.title}'s cover`}
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex py-4 p-8 gap-8 md:w-4/6 flex-col mx-auto">
            {blogs?.publication.posts.edges.map((post: any) => (
              <div
                key={post.node.id}
                className="p-4 hover:border bg-white rounded-[4px] transition-all
                border border-slate6  ease-linear hover:border-slate8"
              >
                <h3 className="text-lg text-mint12 font-medium pb-2">
                  <a
                    href={post.node.url}
                    target="_blank"
                    rel="tahirahmedt.com"
                    className="cursor-pointer hover:underline decoration-mint12"
                  >
                    {post.node.title}&nbsp;
                  </a>
                </h3>
                <div className="flex gap-2">
                  {post.node.tags.map((tag: any) => (
                    <div
                      className="text-xs grid place-items-center 
                      font-medium py-1 px-2 bg-mint3 text-mint11 border-2 rounded-3xl border-mint6"
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
      </>
      <div className="flex items-center justify-center">
        <a
          target="_blank"
          rel="tahirahmedt.com"
          href="https://blog.tahirahmedt.com"
          className="bg-white border cursor-pointer  border-mint7 hover:text-white hover:bg-jade10 hover:ring-2 ring-offset-2 hover:ring-jade7 transition-colors text-mint12 px-4 py-2 rounded-3xl"
        >
          Read all articles
        </a>
      </div>
    </section>
  )
}
