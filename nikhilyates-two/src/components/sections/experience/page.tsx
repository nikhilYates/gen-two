import React from 'react'
import ExperienceCard from './utilities/ExperienceCard'
import { ExperienceType } from '@/lib/definitions'


// RAG-interactable content here. want to be able to select an experience, 
// interact with it using an LLM + perform a compare/contrast with another experience
// sort experiences by key skills developed, tools used, volunteer work, etc

const dummyExperience: ExperienceType = {
  title: "Software Engineer",
  company: "Tech Solutions Inc.",
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
  endDate: new Date("2023-06-30")
}


const Experience = () => {
  return (
    <div className='bg-zinc-950 h-screen w-screen p-16 flex flex-col gap-8'>
      <div className='w-full flex flex-col gap-3'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white'>experience</h1>
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight text-white'>little bit of this, little bit of that... whole lot of  </h3>
      </div>
      <div className='w-full h-full flex flex-row'>
        <div className='w-[750px]'>
          <ExperienceCard experience={dummyExperience}/>
        </div>
      </div>
        
    </div>
  )
}

export default Experience