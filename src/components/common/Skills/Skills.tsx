'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

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
    { name: 'React', image: react, showinShortSkills: true },
    { name: 'NextJS', image: next, showinShortSkills: false },
    { name: 'NodeJS', image: node, showinShortSkills: true },
    // { name: 'NodeJS', image: node, showinShortSkills: false },
    { name: 'Azure', image: azure, showinShortSkills: false },
    { name: 'PostgreSQL', image: postgresql, showinShortSkills: false },
    { name: 'MongoDB', image: mongodb, showinShortSkills: false },
    { name: 'Tailwind CSS', image: tailwind, showinShortSkills: false },
    { name: 'Redux', image: redux, showinShortSkills: false },
    { name: 'Typescript', image: ts, showinShortSkills: true },
    { name: 'JavaScript', image: js, showinShortSkills: true },
  ]

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <motion.section className="max-w-5xl mx-auto pb-32 px-8">
      <div className="bg-slate-200 w-full h-[1px]"></div>
      <p className="pb-12 text-lg text-justify pt-24">
        For the most part of my carrier, I&apos;ve been{' '}
        <span className="font-bold text-mint11">frontend developer</span> and
        started picking up backend technologies and became a{' '}
        <span className="font-bold text-mint11">MERN</span> fullstack developer.
        This transition has helped me broaden my capabilities and understand
        end-to-end development of web applications. Below are the technologies
        I&apos;m comfortable and have enjoyed working with
      </p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap gap-8 items-center justify-center"
      >
        {skillsList.map(({ name, image }) => (
          <motion.div
            variants={item}
            key={name}
            title={name}
            // flex bg-gradient-to-br from-fuchsia-50 to-purple-50
            className="flex gap-2 items-center rounded-full h-16 w-48 justify-center border border-mint7 bg-mint2 p-2"
          >
            <figure>
              <Image src={image} alt="name" height={45} width={45} />
            </figure>
            <figcaption>{name}</figcaption>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
