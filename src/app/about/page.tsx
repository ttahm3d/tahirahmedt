export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-accent-12 mb-6">About Me</h1>
        <div className="prose prose-lg space-y-6 text-accent-11">
          <p>
            Hi, I&apos;m Tahir Ahmed, a MERN full-stack developer with 7 years
            of experience. Currently working at PwC, I specialize in building
            scalable web applications and implementing complex business logic.
          </p>
          <p>My expertise includes:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Full-stack development with MERN</li>
            <li>Modern frontend frameworks (React, Next.js)</li>
            <li>Backend development with Node.js</li>
            <li>Database design and optimization</li>
            <li>Cloud services and deployment</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
