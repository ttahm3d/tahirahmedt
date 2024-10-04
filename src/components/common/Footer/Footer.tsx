'use client'

import Image from 'next/image'
import Logo from '@/assets/tahirahmedt-logo-darkbg .svg'
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
      text: 'twitter',
      icon: (
        <>
          <FaXTwitter />
        </>
      ),
      path: 'https://twitter.com/ttahm3d',
    },
    {
      text: 'github',
      icon: (
        <>
          <AiOutlineGithub />
        </>
      ),
      path: 'https://github.com/ttahm3d',
    },
    {
      text: 'linkedin',
      icon: (
        <>
          <AiOutlineLinkedin />
        </>
      ),
      path: 'https://www.linkedin.com/in/tahirahmedt/',
    },
  ]

  return (
    <footer className="p-8 mt-auto bg-red-11">
      <section className="max-w-5xl px-8 mx-auto grid grid-cols-1 md:grid-cols-5 place-items-center">
        <div className="md:place-self-start md:col-span-1 col-span-1 place-self-center">
          <Image src={Logo} alt="logo" width={50} height={50} />
        </div>
        <div className="md:col-span-4 md:place-self-end md:p-0 pt-4">
          <div className="flex gap-8 items-center">
            {externalLinks.map((listItem) => (
              <div key={listItem.text}>
                <a
                  className="hover:text-white text-lg font-medium text-slate6"
                  href={listItem.path}
                  target="_blank"
                  rel="tahirahmedt.com"
                >
                  {listItem.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </footer>
  )
}
