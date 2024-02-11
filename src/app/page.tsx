import { HashnodeBlogs, Hero } from '@/components'

export default function Page() {
  return (
    <main className={`bg-mint1`}>
      <Hero />
      <HashnodeBlogs mode="shorthand" />
    </main>
  )
}
