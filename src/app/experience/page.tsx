export default function AboutPage() {
  const experiences = [
    {
      company: "PricewaterhouseCoopers (PwC)",
      role: "Senior Associate",
      duration: "August 2021 - Present",
      workItems: [
        "Developed and deployed 6+ scalable projects built with Typescript, ReactJS and NodeJS with 80% test coverage. The projects span across domains such as software, healthcare, finance, regulations and value chain optimization.",
        "Lead a the UI team in development of development of Revenue Growth Optimization tool which being used by industry leading giants such as Nestle and Hershey's to plan their trade promotions.",
        "Created scalable solutions for complex problems, developed reusable customized components and integrated 100+ BFF layer APIs across the app, with more than 80% code coverage and AA accessibility compliance.",
        "Crafted and launched 4 AI tools. One of the tools uses compliance documents from previous years and meeting notes to generate compliance documents for the current year. The platform makes use of LLM models and GenAI capabilities to index these documents and return responses, saving 2-3 weeks of manual effort.",
        "Created a white label product that enables companies to perform pre-market entry surveys, resulting in a 25% increase in decision-making speed by providing real-time data insights, which led to a 15% improvement in market entry success rates for clients",
        "Built a comprehensive full-stack application to plan and provide elderly care services for an insurance provider, supporting over 10,000 elderly clients and their caregivers with in-app notifications using ReactJS, NodeJS, MSSQL and Websockets.",
        "Created flex configuration tool that helps in creating and validating plans for Flex Cards. Reducing the processing time by 30 days. Integrated with Azure AD and set-up Azure DevOps Pipelines.",
      ],
      technologies: [
        "ReactJS",
        "Node.JS",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind",
        "MaterialUI",
        "Redux",
        "HTML5",
        "CSS3",
        "Azure",
        "PostgreSQL",
      ],
    },
    {
      company: "Wipro Technologies",
      role: "Project Engineer",
      duration: "July 2018 - August 2021",
      workItems: [
        "Started as Devops support engineer, migrating applications from on-premise to Azure Cloud, managing CI/CD pipelines using Azure DevOps and automating infrastructure provisioning with ARM templates and Terraform.",
        "Re-architected a business critical Dotnet app to make it cloud compatible by integrated blob storage, AD Authentication, Azure Key Vault and converted SSIS jobs into Azure Data Factory jobs. The app was used by 3 Lines of Business to track the migration progress of 200+ apps.",
        "Learnt React and contributed to rewriting frontend codebase of 3 applications using react, and redux-thunk, converting figma mockups into pixel-perfect responsive web apps.",
      ],
      technologies: [
        "Azure DevOps",
        "TeamCity",
        "Jenkins",
        "ReactJS",
        "JavaScript",
        "MaterialUI",
        "Redux-thunk",
        "HTML5",
        "CSS3",
        "Azure",
        "PostgreSQL",
      ],
    },
  ];
  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl text-center font-bold text-accent-12 mb-8">
          Experience
        </h1>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="mb-12 border-l border-accent-7 pl-6 relative"
          >
            <h2 className="text-3xl font-semibold text-accent-12 mb-1">
              {exp.company}
            </h2>
            <p className="text-gray-11 italic mb-6">
              {exp.role} | {exp.duration}
            </p>
            <ul className="list-disc list-inside mb-4">
              {exp.workItems.map((item, index) => (
                <li key={index} className="text-gray-11 mb-2 text-justify">
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-accent-3 text-accent-11 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </div>
              ))}
            </div>
            <div className="w-4 h-4 bg-accent-9 rounded-full absolute top-3 left-[-9]"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
