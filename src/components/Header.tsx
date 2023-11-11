"use client";

import Image from "next/image";
import Logo from "@/assets/TALogoTransparent.svg";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const pages = [
    {
      name: "Home",
    },
    {
      name: "Work",
    },
    {
      name: "About",
    },
    {
      name: "Projects",
    },
  ];

  return (
    <header className="p-2">
      <section className="flex gap-4 mx-auto items-center max-w-3xl">
        <div>
          <Image src={Logo} alt="logo" width={60} height={60} />
        </div>
        <div className="flex ml-auto gap-4 ">
          {pages.map((page) => (
            <div key={page.name}>
              <Link href="/home"> {page.name}</Link>
            </div>
          ))}
        </div>
      </section>
    </header>
  );
}
