interface IExperienceProps {
  org: string
  location: string
  startPeriod: string
  endPeriod: string
  roles: {
    roleId: number
    roleTitle: string
    orgTitle: string
    responsibilities: string[]
  }[]
}
