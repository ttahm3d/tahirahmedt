import Image from 'next/image'
import Logo from '@/assets/tahirahmedt-logo.svg'
import { Hero, Skills } from '@/components'
import { IBM_Plex_Sans } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const ibmPlexSans = IBM_Plex_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function Page() {
  return (
    <main className={ibmPlexSans.className}>
      <Hero />
      <Skills />
    </main>
  )
}
