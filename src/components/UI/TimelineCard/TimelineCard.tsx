'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface ITimelineCard {
  work: IWorkExperience
}

export default function TimelineCard({ work }: ITimelineCard) {
  const [showDescription, setShowDescription] = useState<boolean>(false)
  return (
    <article className="md:p-6 pl-8 bg-white border-slate6 border rounded-[4px] transition-all">
      <section className="grid grid-cols-12 items-center">
        <div className="flex justify-between items-baseline py-2 col-span-10">
          <div>
            <h2 className="text-2xl text-mint12 font-semibold">{work.org}</h2>
            <small className="text-sm italic text-slate11">
              {work.location}
            </small>
          </div>
          <p className=" italic">
            {work.startPeriod} - {work.isCurrent ? 'Present' : work.endPeriod}
          </p>
        </div>
        <div className="col-span-2 justify-self-end">
          {showDescription ? <Minus /> : <Plus />}
        </div>
      </section>
      <section>
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
      </section>
    </article>
  )
}
