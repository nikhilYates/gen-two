import React from 'react'
import { NavigationContentType } from '@/lib/definitions';
import experience from '../../../../public/assets/images/navCards/experience.jpg'


interface NavCardProps {
    content: NavigationContentType,
    onNavigate: (link: string) => void;
    
}


const NavCard = ({ content, onNavigate }: NavCardProps) => {
  return (
    <div 
        key={content.id} 
        className='opacity-50 rounded-2xl w-[12rem] h-[22rem] overflow-hidden flex flex-col items-start justify-end 
        border-[0.25rem] border-gray-400 cursor-pointer transition-all duration-1000 hover:w-[24rem] hover:opacity-100'
        style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${content.photoUrl})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'left' 
        }}
        onClick={() => onNavigate(content.link)}
    >
        <div className='transform whitespace-nowrap text-left p-4'>
            <h3 className="text-6xl font-semibold tracking-tight text-white">{content.title}</h3>
        </div>
        <div className='inset-0 p-4 text-white text-center w-full h-full hidden hover:block'>
            {content.description}
        </div>
    </div>
  )
}

export default NavCard