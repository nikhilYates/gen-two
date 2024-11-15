import React from 'react'
import { ExperienceType } from '@/lib/definitions'
import ExperienceCardLarge from './utilities/ExperienceCard'
import ExperienceCardSmall from './utilities/ExperienceCardSmall'


// RAG-interactable content here. want to be able to select an experience, 
// interact with it using an LLM + perform a compare/contrast with another experience
// sort experiences by key skills developed, tools used, volunteer work, etc

const dummyExperience: ExperienceType = {
  title: "Full-Stack Engineer",
  company: "Conduit Venture Labs",
  category: "Software Development", 
  skills: [
    "JavaScript",
    "Python",
    "HTML/CSS",
    "SQL",
    "Git",
    "REST APIs"
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
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white'>experience</h1>
        <h3 className='scroll-m-20 text-2xl font-medium tracking-tight text-white'>little bit of this, little bit of that... whole lot of  </h3>
      </div>
      <div className='w-full h-full flex flex-row'>
        <div className='w-full'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[dummyExperience, dummyExperience].map((experience, index) => (
              <ExperienceCardLarge experience={dummyExperience} />
            ))}
          </div>
          <div className='flex flex-row w-full justify-between gap-8'>
            <div className='flex flex-row w-1/2 gap-8 justify-between'>
              <ExperienceCardSmall experience={dummyExperience} />
              <ExperienceCardSmall experience={dummyExperience} />
            </div>
            <div className='w-1/2'>
              <ExperienceCardLarge experience={dummyExperience} />
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Experience