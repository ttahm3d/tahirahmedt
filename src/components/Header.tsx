import Image from "next/image";
import Logo from "@/assets/TALogoTransparent.svg";
import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <header className="p-2 text-2xl shadow-sm flex gap-4 items-center">
      <div>
        <FaBars />
      </div>
      <div>
        <Image src={Logo} alt="logo" />
      </div>
    </header>
  );
}
