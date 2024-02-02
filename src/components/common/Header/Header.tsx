'use client'

import Image from 'next/image'
import Logo from '@/assets/tahirahmedt-logo.svg'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setOpenMenu((open) => !open)
  }

  const pages = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Work',
      path: '/work',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Projects',
      path: '/projects',
    },
  ]

  return (
    <header className="py-2 px-4">
      <nav className="flex gap-4 mx-auto items-center max-w-5xl">
        <div>
          <Link href="/">
            <Image src={Logo} alt="logo" width={50} height={50} />
          </Link>
        </div>
        <div className="hidden lg:flex ml-auto gap-4 bg-inherit items-center justify-center">
          {pages.map((page) => (
            <div key={page.name}>
              <Link
                className={`${
                  pathname === page.path
                    ? 'text-mint11 ring-1 ring-offset-2 ring-mint10'
                    : 'text-mauve10'
                } text-lg px-2 py-1 transition-all ease-linear duration-300 
                font-medium hover:text-mint11 hover:ring-1 rounded-2xl ring-offset-2 hover:ring-jade7`}
                href={page.path}
              >
                {page.name}
              </Link>
            </div>
          ))}
        </div>
        <div
          className="lg:hidden ml-auto text-2xl z-10 cursor-pointer"
          onClick={toggleMenu}
        >
          <FaBars />
        </div>
        {/* {openMenu && ( */}
        <div
          className={`lg:hidden flex flex-col ${
            openMenu ? '' : 'translate-y-[-100%]'
          } absolute inset-0 gap-8 backdrop-blur-sm bg-bronze2/80 items-center justify-center transition-transform duration-500 ease-in-out`}
        >
          {pages.map((page) => (
            <div key={page.name} className="text-2xl">
              <Link
                className={`${
                  pathname === page.path
                    ? 'text-mint11 ring-1 ring-offset-2 ring-mint10'
                    : 'text-mauve10'
                } text-lg px-2 py-1 transition-all ease-linear duration-300 
                font-medium hover:text-mint11 hover:ring-1 rounded-2xl ring-offset-2 hover:ring-jade7`}
                href={page.path}
                onClick={toggleMenu}
              >
                {page.name}
              </Link>
            </div>
          ))}
        </div>
        {/* )} */}
      </nav>
    </header>
  )
}
