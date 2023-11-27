import Image from 'next/image'
import azure from '@/assets/skills/azure.svg'
import js from '@/assets/skills/js.svg'
import mongodb from '@/assets/skills/mongodb.svg'
import next from '@/assets/skills/next.svg'
import node from '@/assets/skills/nodejs.svg'
import postgresql from '@/assets/skills/postgresql.svg'
import react from '@/assets/skills/react.svg'
import redux from '@/assets/skills/redux.svg'
import tailwind from '@/assets/skills/tailwind.svg'
import ts from '@/assets/skills/ts.svg'

export default function Skills() {
  const skillsList = [
    { name: 'reactjs', image: react },
    { name: 'nextjs', image: next },
    { name: 'nodejs', image: node },
    { name: 'azure', image: azure },
    { name: 'postgresql', image: postgresql },
    { name: 'mongodb', image: mongodb },
    { name: 'tailwind', image: tailwind },
    { name: 'redux', image: redux },
    { name: 'ts', image: ts },
    { name: 'js', image: js },
  ]

  return (
    <section className="">
      <section className="max-w-5xl mx-auto pb-32 px-8">
        <div className="bg-slate-200 w-full h-[1px]"></div>
        <p className="pb-12 text-lg text-justify pt-32">
          For the most part of my carrier, I&apos;ve been{' '}
          <span className="font-bold text-fuchsia-600">frontend developer</span>{' '}
          and started picking up backend technologies and became a{' '}
          <span className="font-bold text-fuchsia-600">MERN</span> fullstack
          developer. This transition has helped me broaden my capabilities and
          understand end-to-end development of web applications. Below are the
          technologies I&apos;m comfortable and have enjoyed working with
        </p>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          {skillsList.map(({ name, image }) => (
            <div
              key={name}
              title={name}
              className="p-4 flex bg-gradient-to-br from-fuchsia-50 to-purple-50 rounded-md h-36 w-36 flex-col gap-4 justify-center"
            >
              <figure>
                <Image src={image} alt="name" height={125} width={125} />
              </figure>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
