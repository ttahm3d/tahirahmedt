import { HashnodeBlogs, Hero, Skills } from '@/components'
import { IBM_Plex_Sans } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const ibmPlexSans = IBM_Plex_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function Page() {
  return (
    <main className={`bg-[#0278641a] ${ibmPlexSans.className}`}>
      <Hero />
      <HashnodeBlogs />
    </main>
  )
}
