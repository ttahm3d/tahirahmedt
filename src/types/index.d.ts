interface IExperienceProps {
  org: string
  location: string
  startPeriod: string
  endPeriod?: string
  isCurrent: boolean
  roles: {
    roleId: number
    roleTitle: string
    projectClient?: string
    projectTitle?: string
    skillsUtilized: Skill[] | string
    responsibilities: string[]
    isCurrentlyRunnning?: boolean
    startDate?: string
    endDate?: string
  }[]
}

interface IWorkExperience {
  org: string
  location: string
  startPeriod: string
  endPeriod?: string
  isCurrent: boolean
  shortDescription: Array<string | JSX.Element>
  skills: Array<Skill | string>
}

interface IProject {
  name: string
  description: string
  category?: 'personal' | 'work'
  github: string
  live: string
  techStack: Array<Skill>
}

type Skill =
  | 'react'
  | 'nextjs'
  | 'mongodb'
  | 'mui'
  | 'tailwind css'
  | 'HTML'
  | 'CSS'
  | 'SASS'
  | 'JavaScript'
  | 'Azure'
  | 'mongodb'
  | 'SQL'
  | 'PostgreSQL'
  | 'storybook'
  | 'react-charts'
  | 'typescript'
  | 'nodejs'
  | 'styled-components'
  | 'redux'
