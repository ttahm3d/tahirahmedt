import Image from "next/image";
import Logo from "@/assets/TALogoTransparent.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Image src={Logo} alt="logo" />
    </main>
  );
}
