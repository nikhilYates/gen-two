import React from 'react'
import { ExperienceType } from '@/lib/definitions'
import ExperienceCardLarge from './utilities/ExperienceCard'
import ExperienceCardSmall from './utilities/ExperienceCardSmall'

const dummyExperience: ExperienceType = {
  title: "Full-Stack Engineer",
  company: "Conduit Venture Labs",
  category: "Software Development", 
  skills: [
    "TypeScript",
    "React Native",
    "PostgreSQL",
    "Git",
  ],
  tools: [
    "VS Code",
    "GitHub",
    "Jira",
    "Postman",
    "MySQL"
  ],
  description: "Developed and maintained web applications using modern JavaScript frameworks and best practices. Collaborated with cross-functional teams to deliver high-quality software solutions.",
  achievements: [
    "Built responsive web applications serving 10k+ daily users",
    "Improved application performance by 30% through code optimization",
    "Implemented automated testing reducing bugs by 40%",
    "Contributed to successful delivery of 5 major product releases"
  ],
  durationMonths: 18,
  startDate: new Date("2022-01-01"),
  endDate: new Date("2023-06-30"),
  location: 'remote',
  frequency: 'fulltime'
}


const Experience = () => {
  return (
    <div className='bg-zinc-950 h-auto w-screen p-16 flex flex-col gap-8'>
      <div className='w-full flex flex-col gap-3'>
        <h1 className='scroll-m-20 text-4xl font-extralight tracking-tight lg:text-8xl text-white'>experience</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Top Left */}
        <ExperienceCardLarge experience={dummyExperience} />
        
        {/* Top Right */}
        <ExperienceCardLarge experience={dummyExperience} />
        
        {/* Bottom Left - Two small cards */}
        <div className='flex flex-col sm:flex-row gap-8'>
          <ExperienceCardSmall experience={dummyExperience} />
          <ExperienceCardSmall experience={dummyExperience} />
        </div>
        
        {/* Bottom Right */}
        <ExperienceCardLarge experience={dummyExperience} />
      </div>
    </div>
  )
}

export default Experience