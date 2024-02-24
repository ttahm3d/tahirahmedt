'use client'

import { Skills, TimelineCard } from '@/components'

export default function Page() {
  const workExperience: Array<IWorkExperience> = [
    {
      org: 'Pricewaterhouse Coopers',
      location: 'Bengaluru, India',
      startPeriod: 'Aug 2021',
      isCurrent: true,
      skills: [
        'react',
        'nodejs',
        'JavaScript',
        'Azure',
        'storybook',
        'tailwind css',
        'mongodb',
        'mui',
      ],
      shortDescription: [
        <>
          Updated Appkit, internal component library, to v4 and implemented
          Compound Component pattern to improve API usability
        </>,
        'Worked on MarketIntelligence - a tool that processes articles from multiple websites and generates insights into investments done by competitors',
        'Developed a product from Sompo Holdings that aimed at providing care for elderly to perform pre-market entry survey',
        'Developed customized components and seamlessly integrated them with Storybook for streamlined design collaboration.',
        'Designed and implemented RESTful APIs using Node.js and Express framework. Utilized Sequelize ORM to interact with the database and manage data models.',
        'Developed a tool for Nations benefits to create and validate plans for Flexcards, which reduced processing time by 4-5 weeks. Worked as solo developer during MVP phase',
        'Developed an offering and pricing controlling tool for Autodesks to sell their software products',
      ],
    },
    {
      org: 'Wipro',
      location: 'Bengaluru, India',
      startPeriod: 'July 2018',
      endPeriod: 'Aug 2021',
      isCurrent: false,
      skills: [
        'react',
        'JavaScript',
        'Azure',
        'mui',
        'Azure Devops',
        'Frontify UI',
      ],
      shortDescription: [
        'Rewriting frontend codebase of applications using react, and redux-thunk.',
        'Rearchitecturing the dotnet apps to make them cloud compatible.',
        'Replatformed apps from old servers to new servers - both onpremise and cloud',
        'Conducted annual BCM testing for 10 apps that I was incharge of',
      ],
    },
  ]
  return (
    <main className="pb-12">
      <h1 className="text-7xl text-center font-semibold text-mint12 py-8">
        work
      </h1>
      <Skills />
      <section className="max-w-3xl p-8 mx-auto">
        <h2 className="text-center text-mint12 font-semibold text-5xl pb-8">
          Experience
        </h2>
        <div className="flex flex-col">
          {workExperience.map((w) => (
            <TimelineCard key={w.org} work={w} />
          ))}
        </div>
      </section>
      <div></div>
    </main>
  )
}
