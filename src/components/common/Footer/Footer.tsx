'use client'

import Image from 'next/image'
import Logo from '@/assets/tahirahmedt-logo.svg'
import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

export default function Footer() {
  const internalLinks: {
    text: string
    path: string
  }[] = [
    {
      text: 'Work',
      path: '/work',
    },
    {
      text: 'About',
      path: '/about',
    },
    {
      text: 'Projects',
      path: '/projects',
    },
  ]

  const externalLinks = [
    {
      text: (
        <>
          <FaXTwitter />
        </>
      ),
      path: 'https://twitter.com/ttahm3d',
    },
    {
      text: (
        <>
          <AiOutlineGithub />
        </>
      ),
      path: 'https://github.com/ttahm3d',
    },
    {
      text: (
        <>
          <AiOutlineLinkedin />
        </>
      ),
      path: '/projects',
    },
  ]

  return (
    <footer className="p-8 mt-auto bg-bronze4">
      <section className="grid md:grid-cols-5 grid-cols-1 max-w-5xl mx-auto">
        <div className="col-span-1 place-self-center">
          <Image src={Logo} alt="logo" width={120} height={120} />
        </div>
        <div className="col-span-4 grid md:grid-cols-2 grid-cols-1 gap-8 items-start justify-items-center">
          <div>
            <h4 className="font-semibold pb-4 text-center md:text-left text-gray-800">
              Pages
            </h4>
            <ul className="flex flex-col gap-2">
              {internalLinks.map((link) => (
                <li key={link.path} className="text-center md:text-left">
                  <Link
                    href={link.path}
                    className="hover:text-mint11 text-slate-600 hover:underline-offset-2 transition-colors text-md"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold pb-4 text-center md:text-left text-gray-800">
              Social Links
            </h4>
            <ul className="flex md:justify-start justify-center gap-2">
              {externalLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    target="_blank"
                    className="hover:text-fuchsia-600 text-slate-600  text-lg hover:underline-offset-2 transition-colors text-md"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </footer>
  )
}
