interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A full-stack application built with Next.js and MongoDB",
    tags: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/yourusername/project-one",
  },
  {
    title: "Project Two",
    description: "Real-time chat application using Socket.io and React",
    tags: ["React", "Socket.io", "Node.js", "Express"],
    link: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description: "E-commerce platform with advanced filtering and search",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Redux"],
    link: "https://github.com/yourusername/project-three",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-6 rounded-lg border border-accent-6 bg-accent-2 hover:border-accent-7 transition-colors">
      <h3 className="text-xl font-semibold text-accent-12 mb-2">
        {project.title}
      </h3>
      <p className="text-accent-11 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-sm rounded-md bg-accent-3 text-accent-11"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-accent-11 hover:text-accent-12 transition-colors"
        >
          View Project →
        </a>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-accent-12 mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
