import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  // weight: ['400', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tahir Ahmed T",
  description:
    "Tahir Ahmed is a MERN full-stack developer with 7 years of experience, currently working at PwC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexSans.className} antialiased min-h-screen flex flex-col `}
      >
        <div className="absolute w-full h-[480px] bg-linear-to-b opacity-[0.6] -z-10 from-accent-4 to-transparent"></div>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
