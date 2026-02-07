const projects: Array<IProject> = [
  {
    name: "Snapshot Ai",
    description:
      "AI powered tool that helps you generate content for your appraisals",
    github: "https://github.com/ttahm3d/snapshot-ai",
    live: "https://snapshot-ai.vercel.app/",
    tags: ["nextjs", "shadcn", "styled-components", "typescript", "gorq"],
  },
  {
    name: "Breakout",
    description:
      "Social media app built with Firebase. Users can post, like and comment on posts.",
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
    description:
      "Ecommerce store to sell Dota 2 Merch. Itegrated with Razorpay for payments",
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
      className="p-4 mx-auto w-full rounded-md border border-gray-6 hover:border-gray-7 hover:bg-gray-3 transition-all min-h-48 flex flex-col justify-between"
    >
      <div className="flex justify-between gap-4 items-center mb-4">
        <h3 className="text-xl self-center font-medium text-accent-11">
          <a
            href={project.live}
            target="_blank"
            className="underline cursor-pointer decoration-accent-11"
          >
            {project.name}
          </a>
        </h3>
        <div>
          <a
            href={project.github}
            target="_blank"
            className="text-gray-10 text-xs px-2 py-0.5 inline-block rounded-lg underline decoration-gray-11 cursor-pointer"
          >
            Github
          </a>
        </div>
      </div>
      <p className="text-sm text-gray-11 self-start">{project.description}</p>
      <div className="flex flex-wrap gap-2 text-xs mt-1 self-start">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
