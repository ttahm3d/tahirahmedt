import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full pt-2">
      <nav className="h-full container mx-auto backdrop-blur flex items-center justify-between p-4 rounded-lg">
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-12 text-3xl font-medium hover:text-accent-10 transition-colors"
          >
            Tahir Ahmed
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                href="/"
                className="text-accent-11 hover:text-accent-12 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-accent-11 hover:text-accent-12 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-accent-11 hover:text-accent-12 transition-colors"
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
