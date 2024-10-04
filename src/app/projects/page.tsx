'use client'

import ProjectCard from '@/components/UI/ProjectCard/ProjectCard'

export default function Page() {
  const projects: Array<IProject> = [
    {
      name: 'Breakout',
      description:
        'A UI Component Library that provides utility classes for you to create your User Interfaces at Rocket speed',
      github: 'https://github.com/ttahm3d/breakout',
      live: 'https://break--out.vercel.app/',
      techStack: ['react', 'styled-components', 'typescript', 'redux'],
    },
    {
      name: 'NoteIt',
      description:
        'Notes App with React on frontend and Supabase on the backend',
      github: 'https://github.com/ttahm3d/noteit',
      live: 'https://note--it.vercel.app/',
      techStack: ['react', 'styled-components'],
    },
    {
      name: 'AegisStore',
      description: 'Ecommerce store to sell Dota 2 Merch',
      github: 'https://github.com/ttahm3d/aegis-store',
      live: 'https://aegis-store.vercel.app/',
      techStack: ['react', 'SASS'],
    },
    {
      name: 'ChunksUI',
      description:
        'A UI Component Library that provides utility classes for you to create your User Interfaces at Rocket speed',
      github: 'https://github.com/ttahm3d/chunks',
      live: 'https://chunksui.netlify.app',
      techStack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'AegisTube',
      description: 'Video library with Dota 2 Videos',
      github: 'https://github.com/ttahm3d/aegistube',
      live: 'https://aegistube.vercel.app/',
      techStack: ['react', 'JavaScript', 'CSS'],
    },
  ]
  return (
    <main className="pb-12">
      <div className="max-w-3xl p-8 mx-auto">
        <h1 className="text-7xl text-center font-semibold text-red-12 py-8">
          projects
        </h1>
      </div>
      <section className="max-w-3xl p-8 mx-auto flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </section>
    </main>
  )
}
