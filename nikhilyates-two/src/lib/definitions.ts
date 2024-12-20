export type ExperienceType = {
    id: number;
    title: string;
    company: string;
    category: string;
    skills: string[];
    tools: string[];
    description: string;
    achievements: string[];
    durationMonths: number;
    startDate: string;
    endDate: string;
    location: string;
    frequency: string;
    chartData?: { label: string; desktop: number; }[]; // Made chartData optional with ?
};

export type NavigationContentType = {
    id: number,
    title: string,
    description: string,
    photoUrl: string,
    link: string
}

export type ProjectType = {
    id: number,
    name: string,
    filename: string,
    category: string,
    overview: string,
    skills: string[],
    date: string,
    link: string,
    mediaUrl: string
}