"use client";

import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import { useScroll } from "@/hooks/useScroll";
import Image from "next/image";
import Logo from "@/assets/TahirAhmedLogo.svg";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const scrolled = useScroll();

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setOpenMenu((open) => !open);
  };

  const routes = [
    { name: "Home", path: "/" },
    // { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur pt-2 ${
        scrolled ? "bg-accent-3/10" : "bg-transparent"
      }`}
    >
      <nav
        className={`h-full max-w-6xl mx-auto flex items-center justify-between p-4 rounded-lg transition-colors duration-200`}
      >
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-12 text-3xl font-medium hover:text-accent-12 transition-colors"
          >
            <Image src={Logo} alt="Tahir Ahmed Logo" width={40} height={40} />
          </Link>
        </div>

        <div className="md:block hidden">
          <ul className="flex items-center space-x-6">
            {routes.map((route) => (
              <li key={route.name}>
                <Link
                  href={route.path}
                  className={classNames(
                    "text-gray-11 font-semibold hover:text-gray-12 transition-colors",
                    {
                      "text-gray-12": pathname === route.path,
                    }
                  )}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
          <ThemeSwitcher />
        </div>
        <div
          className="md:hidden text-2xl z-20 cursor-pointer rounded-md border border-gray-7 p-2 "
          onClick={toggleMenu}
        >
          <FaBars />
        </div>
        <div
          className={classNames(
            "md:hidden absolute inset-0 bg-accent-3/90 backdrop-blur z-10 flex transition transform duration-300 ease-in-out min-h-screen p-16",
            {
              "translate-x-[30%]": openMenu,
            },
            {
              "translate-x-[100%]": !openMenu,
            }
          )}
        >
          <ul className="flex flex-col items-start justify-center space-y-16 w-full">
            {routes.map((route) => (
              <li key={route.name} onClick={toggleMenu}>
                <Link href={route.path} className="text-3xl text-gray-11">
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
