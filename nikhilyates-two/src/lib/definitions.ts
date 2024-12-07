export type ExperienceType = {
    id: number,
    title: string,
    company: string,
    category: string,
    skills: string[],
    tools: string[],
    description: string,
    achievements: string[] 
    durationMonths: number,
    startDate: string,
    endDate: string,
    location: string,
    frequency: string
}

export type NavigationContentType = {
    id: number,
    title: string,
    description: string,
    photoUrl: string
}