interface ITimelineCard {
  work: IWorkExperience
}

export default function TimelineCard({ work }: ITimelineCard) {
  return (
    <article className="md:px-8 hover:bg-mint2 transition-all">
      <div className="flex justify-between items-baseline py-2">
        <div>
          <h2 className="text-2xl text-mint12 font-semibold">{work.org}</h2>
          <small className="text-sm italic text-sage11">{work.location}</small>
        </div>
        <p className=" italic">
          {work.startPeriod} - {work.isCurrent ? 'Present' : work.endPeriod}
        </p>
      </div>
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
    </article>
  )
}
