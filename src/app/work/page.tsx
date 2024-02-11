'use client'

import { IBM_Plex_Sans } from 'next/font/google'
import { Skills } from '@/components'

// If loading a variable font, you don't need to specify the font weight

export default function Page() {
  return (
    <main className="bg-mint1">
      <h1>Work</h1>
      <Skills />
    </main>
  )
}
