import React from 'react'
import { ExperienceType } from '@/lib/definitions'
import ExperienceCardLarge from './utilities/ExperienceCard'
import ExperienceCardSmall from './utilities/ExperienceCardSmall'
import data from '../../../../data/experience.json'



const Experience = () => {
  return (
    <div id='experience' className='bg-zinc-950 h-auto w-screen p-8 lg:p-16 flex flex-col gap-8'>
      <div className='w-full flex flex-col gap-3'>
        <h1 className='scroll-m-20 text-4xl font-extralight tracking-tight lg:text-8xl text-white'>experience</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Top Left */}
        <ExperienceCardLarge experience={data[0]} />
        
        {/* Top Right */}
        <ExperienceCardLarge experience={data[1]} />
        
        {/* Bottom Left */}
        <ExperienceCardLarge experience={data[2]} />
        
        {/* Bottom Right - Two small cards */}
        <div className='flex flex-col lg:flex-row gap-8'>
          <ExperienceCardSmall experience={data[3]} />
          <ExperienceCardSmall experience={data[4]} />
        </div>
      </div>
    </div>
  )
}

export default Experience