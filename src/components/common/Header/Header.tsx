"use client";

import Image from "next/image";
import Logo from "@/assets/tahirahmedt-logo.svg";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => setOpenMenu((t) => !t);

  const pages = [
    {
      name: "Work",
      path: "/work",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
  ];

  return (
    <header className="py-2 px-4">
      <nav className="flex gap-4 mx-auto items-center max-w-3xl">
        <div>
          <Image src={Logo} alt="logo" width={50} height={50} />
        </div>
        <div className="hidden lg:flex ml-auto gap-4 bg-inherit items-center justify-center">
          {pages.map((page) => (
            <div key={page.name} className="text-xl">
              <Link href={page.path}> {page.name}</Link>
            </div>
          ))}
        </div>
        <div
          className="lg:hidden ml-auto text-2xl z-10 cursor-pointer"
          onClick={toggleMenu}>
          <FaBars />
        </div>
        {/* {openMenu && ( */}
        <div
          className={`lg:hidden flex flex-col ${
            openMenu && "translate-y-[-100%]"
          } absolute inset-0 gap-8 backdrop-blur-sm bg-slate-200/70 items-center justify-center transition-transform duration-300 ease-in-out`}>
          {pages.map((page) => (
            <div key={page.name} className="text-2xl">
              <Link href={page.path}> {page.name}</Link>
            </div>
          ))}
        </div>
        {/* )} */}
      </nav>
    </header>
  );
}
