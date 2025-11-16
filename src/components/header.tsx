"use client";

import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import { useScroll } from "@/hooks/useScroll";
import Image from "next/image";
import Logo from "@/assets/TahirAhmedLogo.svg";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function Header() {
  const scrolled = useScroll();

  const pathname = usePathname();

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
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

        <div className="flex items-center space-x-6">
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
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
