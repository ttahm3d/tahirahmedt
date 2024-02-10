'use client'

import { IBM_Plex_Sans } from 'next/font/google'
import { Skills } from '@/components'

// If loading a variable font, you don't need to specify the font weight
const ibmPlexSans = IBM_Plex_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function Page() {
  return (
    <main className={`bg-[#0278641a] ${ibmPlexSans.className}`}>
      <h1>Work</h1>
      <Skills />
    </main>
  )
}
