const projects: Array<IProject> = [
  {
    name: "Breakout",
    description: "Social media app",
    github: "https://github.com/ttahm3d/breakout",
    live: "https://break--out.vercel.app/",
    tags: ["react", "styled-components", "typescript", "redux", "firebase"],
  },
  {
    name: "NoteIt",
    description: "Notes App with React on frontend and Supabase on the backend",
    github: "https://github.com/ttahm3d/noteit",
    live: "https://note--it.vercel.app/",
    tags: ["react", "styled-components", "Supabase"],
  },
  {
    name: "AegisStore",
    description: "Ecommerce store to sell Dota 2 Merch",
    github: "https://github.com/ttahm3d/aegis-store",
    live: "https://aegis-store.vercel.app/",
    tags: ["react", "SASS"],
  },
  {
    name: "ChunksUI",
    description: "Component library with utility classes",
    github: "https://github.com/ttahm3d/chunks",
    live: "https://chunksui.netlify.app",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "AegisTube",
    description: "Video library with Dota 2 Videos",
    github: "https://github.com/ttahm3d/aegistube",
    live: "https://aegistube.vercel.app/",
    tags: ["react", "JavaScript", "CSS"],
  },
];

function ProjectCard({ project }: { project: IProject }) {
  return (
    <div
      key={project.name}
      className="p-4 max-w-2xl mx-auto w-full rounded-md border border-gray-6"
    >
      <h3 className="text-xl self-center font-medium text-accent-11">
        {project.name}
      </h3>
      <p className="text-sm text-gray-11 self-center">{project.description}</p>
      <div className="flex flex-wrap gap-2 text-xs mt-1 self-center">
        {project.tags.map((tag) => (
          <div
            className="px-2 py-1 border-2 border-gray-6 bg-gray-2 text-gray-11 font-medium rounded-full"
            key={tag}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-6xl font-bold text-center text-accent-12 mb-8">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
