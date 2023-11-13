"use client";

import Image from "next/image";
import Logo from "@/assets/tahirahmedt-logo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-2 mt-auto">
      <section className="flex gap-4 mx-auto items-center max-w-3xl">
        <div>
          <Image src={Logo} alt="logo" width={60} height={60} />
        </div>
        <div>
          <h1 className="text-4xl">Tahir Ahmed</h1>
        </div>
      </section>
    </footer>
  );
}
