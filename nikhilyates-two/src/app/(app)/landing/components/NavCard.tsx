import React from 'react'
import { NavigationContentType } from '@/lib/definitions';
import experience from '../../../../public/assets/images/navCards/experience.jpg'


interface NavCardProps {
    content: NavigationContentType,
    onNavigate: (link: string) => void;
    isMobile: boolean;
}


const NavCard = ({ content, onNavigate, isMobile }: NavCardProps) => {
  const handleClick = () => {
    if (content.title.toLowerCase() === 'scorpionlabz') {
      window.open(content.link, '_blank');
    } else {
      onNavigate(content.link);
    }
  };

  return (
    <div 
        key={content.id} 
        className='w-full opacity-70 rounded-2xl md:max-w-full lg:w-[10rem] lg:h-[20rem] h-[8rem] overflow-hidden flex flex-col items-start justify-end 
        border-[0.25rem] border-gray-400 cursor-pointer transition-all duration-1000 md:hover:w-[24rem] md:hover:opacity-100'
        style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${content.photoUrl})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'left' 
        }}
        onClick={handleClick}
    >
        <div className='transform whitespace-nowrap p-0 text-left lg:p-4'>
            <h3 className={`text-9xl md:text-6xl font-semibold tracking-tight text-white/30 lg:text-white/40 ${isMobile && content.id === 3 ? 'line-through' : ''}`}>{content.title}</h3>
        </div>
        <div className='inset-0 p-4 text-white text-center w-full h-full hidden md:hover:block'>
            {content.description}
        </div>
    </div>
  )
}

export default NavCard