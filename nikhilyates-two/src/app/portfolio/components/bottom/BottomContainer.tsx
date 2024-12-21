import react from 'react'
import Image from 'next/image'
import { ProjectType } from '@/lib/definitions'
import { Badge } from '@/components/ui/badge'
import arrowDownLeft from '../../../../../public/assets/svgs/hero/ArrowDownLeft.svg';

type BottomContainerProps = {
    project: ProjectType | null;
}

const BottomContainer: React.FC<BottomContainerProps> = ({ project }) => {
    if(!project) return;
    return (
        <div className='p-4 w-full h-full flex flex-col justify-between'>
            <div className='flex flex-col justify-start gap-4'>
                <h1 className='text-white/50 text-xl 2xl:text-2xl'>technical</h1>
                <div className="flex flex-wrap gap-2">
                    {project?.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-black">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
            <div className="w-full flex flex-row justify-between items-end">
                <Badge variant={'destructive'} className='h-fit'>{project?.date}</Badge>
                <a className='flex flex-row items-end' href={project?.link} target='_blank'>
                    <p className="text-white hover:underline">more about {project?.name}</p>
                    <Image 
                        src={arrowDownLeft} 
                        alt="arrow" 
                        className="h-16 w-16 ml-4 rotate-180"
                    />
                </a>
            </div>
        </div>
    )
}

export default BottomContainer;