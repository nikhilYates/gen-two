'use client'

import React from 'react'
import contents from '../../../data/contents.json';
import NavCard from './components/NavCard';
import Image from 'next/image';
import linkedinWhite from '../../../public/assets/svgs/linkedinWhite.svg';
import instagramWhite from '../../../public/assets/svgs/instagramWhite.svg';
import githubWhite from '../../../public/assets/svgs/githubWhite.svg';
import nyWhite from '../../../public/assets/svgs/nyWhite.svg';
import arrowTurnDownLeft from '../../../public/assets/svgs/hero/ArrowTurnDownLeft.svg';



const LandingPage = () => {
  const handleScroll = (link: string) => {
    const element = document.getElementById(link);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bg-zinc-950 h-screen p-16'>
      <div className='w-full h-full flex flex-col'>
        <div className='h-full w-full flex flex-col justify-top'>
          <div className='flex flex-row justify-between'>
            <Image priority src={nyWhite} alt='linkedin logo' className='h-16 w-16'/>
            <div className="w-1/3">
            </div>
            <div className='flex flex-row justify-end gap-4 '>
              <a href="https://github.com/nikhilyates" target="_blank" rel="noopener noreferrer">
                <Image priority src={githubWhite} alt='github logo' className='h-6 w-6 cursor-pointer hover:opacity-70 transition-opacity'/>
              </a>
              <Image priority src={linkedinWhite} alt='linkedin logo' className='h-6 w-6'/>
              <Image priority src={instagramWhite} alt='linkedin logo' className='h-6 w-6'/>
            </div>
          </div>
          
        </div>
        {/* smart navigation divs */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto flex flex-col justify-center'>
          <div className='flex flex-col justify-center'>
            <div className='flex max-w-max flex-row justify-center gap-1'>
              {contents.map((content) => (
                <NavCard 
                  key={content.id} 
                  content={content} 
                  onNavigate={handleScroll}
                />
              ))}
            </div>
          </div>
        </div>
        </div>

      </div>
  )
}

export default LandingPage