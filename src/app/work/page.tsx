'use client'

import { Skills } from '@/components'

// If loading a variable font, you don't need to specify the font weight

export default function Page() {
  return (
    <main className="bg-mint1">
      <h1 className="text-8xl text-center font-semibold text-mint12 py-8">
        work
      </h1>
      <Skills />
    </main>
  )
}
