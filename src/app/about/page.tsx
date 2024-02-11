'use client'

import Experience from './Experience/Experience'
import { IBM_Plex_Sans } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight

export default function Page() {
  return (
    <main className="bg-mint1">
      <Experience />
    </main>
  )
}
