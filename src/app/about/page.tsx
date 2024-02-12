'use client'

import { Paragraph } from '@/components'

export default function Page() {
  const paragraphs = [
    {
      id: 1,
      text: (
        <>
          I&apos;m a{' '}
          <span className="font-bold text-mint11">Fullstack developer</span>{' '}
          currently working at{' '}
          <span className="font-bold text-mint11">Pricewaterhouse Coopers</span>
          . I&apos;ve always enjoyed working on frontend and learnt backend
          technologies on the job. I&apos;ve a keen{' '}
          <span className="font-bold text-mint11">eye for design</span> and can
          use <span className="font-bold text-mint11">Figma</span> . If not
          working, you will find me spending time on my laptop playing{' '}
          <span className="font-bold text-mint11">chess</span> or watching
          movies.
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          {' '}
          I have Bachelor of Engineering Degree in Computer Science and
          Engineering from Nitte Meenakshi Institute of Technology. I started my
          career with <span className="font-bold text-mint11">Wipro</span> as a{' '}
          <span className="font-bold text-mint11">Dotnet Developer</span> where
          I was migrating applications from old dotnet versions to new dotnet
          versions and old servers to new servers. I got the opportunity to be
          part of team that would end up becoming the{' '}
          <span className="font-bold text-mint11">Cloud Migration</span> team,
          where we migrated apps from on-premise to{' '}
          <span className="font-bold text-mint11">Microsoft Azure</span>.
        </>
      ),
    },
    {
      id: 3,
      text: (
        <>
          Away from the world of programming, I follow{' '}
          <span className="font-bold text-mint11">formula 1</span>. I used to be
          a fan of Cricket until IPL came and ruined it for me. But sometimes I
          still watch non-subcontinent Test Matches. Apart from that I follow
          Counter Strike and DotA Esports and off-late have lost interest in
          both games. I&apos;m a{' '}
          <span className="font-bold text-mint11">foodie</span> in my own way -
          one who loves south indian cusine especially the&nbsp;
          <span className="font-bold text-mint11">darshini</span> culture. like
          to explore iconic eateries of bengaluru and I&apos;m working on
          something in this space so watch out 👀. I also do a bit of mobile
          photography.
        </>
      ),
    },
  ]
  return (
    <main>
      <section className="md:max-w-3xl mx-auto p-8">
        <h1 className="text-8xl text-center font-semibold text-mint12 py-8">
          about
        </h1>
        <div className="py-4 text-sage11 flex flex-col gap-8">
          {paragraphs.map(({ id, text }) => (
            <Paragraph key={id}>{text}</Paragraph>
          ))}
        </div>
      </section>
    </main>
  )
}
