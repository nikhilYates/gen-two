import React from 'react'
import { NavigationContentType } from '@/lib/definitions';


interface NavCardProps {
    content: NavigationContentType
}


const NavCard = ({ content }: NavCardProps) => {
  return (
    <div 
        key={content.id} 
        className='opacity-50 rounded-2xl w-[10rem] h-[34rem] overflow-hidden flex flex-col items-start justify-end 
        border-2 border-gray-400 cursor-pointer transition-all duration-1000 hover:w-[500px] hover:opacity-100'
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