import React from 'react'
import contents from '../../../data/contents.json';
import NavCard from './components/NavCard';


const LandingPage = () => {
  return (
    <div className='bg-zinc-950 h-screen p-16'>
      <div className='w-full h-full flex flex-row justify-between'>
        <div className='h-full w-full flex flex-col justify-end'>
          <h1 className="text-[18rem] font-normal tracking-tighter text-white">nikhil yates</h1>
        </div>
        {/* smart navigation divs */}
        <div className='h-full w-max flex flex-col justify-end'>
          <div className='flex flex-row justify-start gap-1'>
            {contents.map((content) => (
              <NavCard content={content} />
            ))}
              
            </div>
          </div>
        </div>

      </div>
  )
}

export default LandingPage