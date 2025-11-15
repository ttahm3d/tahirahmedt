"use client";

import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import { useScroll } from "@/hooks/useScroll";

export default function Header() {
  const scrolled = useScroll();

  return (
    <header className="sticky top-0 z-50 w-full pt-2 text-white">
      <nav
        className={`h-full max-w-6xl mx-auto backdrop-blur flex items-center justify-between p-4 rounded-lg transition-colors duration-200 ${
          scrolled ? "bg-accent-8/30" : "bg-transparent"
        }`}
      >
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-12 text-3xl font-medium hover:text-accent-12 transition-colors"
          >
            Tahir Ahmed
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                href="/"
                className="text-gray-11 hover:text-gray-12 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-11 hover:text-gray-12 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-gray-11 hover:text-gray-12 transition-colors"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
