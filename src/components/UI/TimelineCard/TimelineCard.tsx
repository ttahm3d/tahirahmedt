'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ITimelineCard {
  work: IWorkExperience
}

export default function TimelineCard({ work }: ITimelineCard) {
  const [showDescription, setShowDescription] = useState<boolean>(false)
  const toggleShowDescription = () => setShowDescription((t) => !t)
  return (
    <article
      className={`md:p-6 p-4 bg-white border rounded-[4px] transition-all ${
        showDescription ? 'border-l-2 border-l-mint11' : 'border-slate6 '
      }`}
    >
      <section className="grid grid-cols-12 items-center">
        <div className="py-2 col-span-10">
          <div>
            <h2 className="text-lg text-mint12 font-semibold">{work.org}</h2>
            <small className="text-sm italic text-slate11">
              {work.location}
            </small>
          </div>
          <p className="italic">
            {work.startPeriod} - {work.isCurrent ? 'Present' : work.endPeriod}
          </p>
        </div>
        <div
          className="col-span-2 justify-self-end text-mint12 rounded-full border border-mint11"
          onClick={toggleShowDescription}
        >
          {showDescription ? <Minus /> : <Plus />}
        </div>
      </section>
      <AnimatePresence>
        {showDescription && (
          <motion.section
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'fit-content' },
              collapsed: { height: 0 },
            }}
            className="pl-8"
          >
            <div>
              {work.shortDescription.map((d, i) => (
                <li className="text-sm py-1 list-inside text-justify" key={i}>
                  {d}
                </li>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              {work.skills.map((tag: any) => (
                <div
                  className="text-xs grid place-items-center
              font-medium py-1 px-2 bg-mint3 text-mint12 border rounded-3xl border-mint6"
                  key={tag}
                >
                  {tag}
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </article>
  )
}
