import Image from "next/image";
import Logo from "@/assets/TALogoTransparent.svg";

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <Image src={Logo} alt="logo" />
    </main>
  );
}
