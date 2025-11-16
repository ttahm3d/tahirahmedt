interface IProject {
  name: string;
  description: string;
  category?: "personal" | "work";
  github: string;
  live: string;
  tags: Array<Skill>;
}

type Skill =
  | "react"
  | "nextjs"
  | "mongodb"
  | "mui"
  | "tailwind css"
  | "HTML"
  | "CSS"
  | "SASS"
  | "JavaScript"
  | "Azure"
  | "mongodb"
  | "SQL"
  | "PostgreSQL"
  | "storybook"
  | "react-charts"
  | "typescript"
  | "nodejs"
  | "styled-components"
  | "redux";
