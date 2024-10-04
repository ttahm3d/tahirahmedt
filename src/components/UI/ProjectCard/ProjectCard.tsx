'use client'

interface IProjectCard {
  project: IProject
}

export default function ProjectCard({ project }: IProjectCard) {
  return (
    <article className="bg-white rounded-[4px] p-4 md:p-8 border-slate6 border hover:border-slate8">
      <div className="grid gap-2 items-center grid-cols-12">
        <h2 className="text-2xl col-span-9 font-semibold text-red-12">
          {project.name}
        </h2>
        <div className="flex gap-4 col-span-3 justify-self-end">
          <a
            href={project.github}
            className="bg-red-10 text-white text-sm hover:ring-2  px-3 py-1
            ring-offset-2 hover:ring-red-7 transition-colors rounded-md"
          >
            Github
          </a>
          <a
            href={project.live}
            className="bg-white border border-red-11 hover:text-white 
             hover:bg-red-10 hover:ring-2 ring-offset-2 hover:ring-red-7 
              transition-colors text-red-11 text-sm rounded-md px-3 py-1"
          >
            Live
          </a>
        </div>
      </div>
      <p className="text-slate9 py-2">{project.description}</p>

      <div className="flex gap-2 flex-wrap pt-2">
        {project.techStack.map((t) => (
          <div
            className="text-xs grid place-items-center 
           font-medium py-1 px-2 bg-red-3 text-red-11 border-2 rounded-3xl border-red-6"
            key={t}
          >
            {t}
          </div>
        ))}
      </div>
    </article>
  )
}
