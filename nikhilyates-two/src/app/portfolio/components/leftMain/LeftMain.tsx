import react from 'react'
import Image from 'next/image'
import { ProjectType } from '@/lib/definitions'

type InfoContainerProps = {
    project: ProjectType | null;
}


const InfoContainer: React.FC<InfoContainerProps> = ({ project }) => {
    if(!project) return;
    return (
        <div className='w-full h-full flex flex-col justify-between p-4 gap-4'>
            <h1 className='text-white/50 text-2xl'>project overview</h1>
            <div className='w-full h-full flex flex-row justify-start gap-4'>
                <div className='h-full w-auto flex flex-col justify-start'>
                    <p className='text-zinc-600 leading-[1.7rem]'>1</p>
                    <p className='text-zinc-600 leading-[1.7rem]'>2</p>
                    <p className='text-zinc-600 leading-[1.7rem]'>3</p>
                    <p className='text-zinc-600 leading-[1.7rem]'>4</p>
                    <p className='text-zinc-600 leading-[1.7rem]'>5</p>
                    <p className='text-zinc-600 leading-[1.7rem]'>6</p>
                    <p className='text-zinc-600 leading-[1.7rem]'>8</p>
                    <p className='text-zinc-600 leading-[1.7rem]'>9</p>
                    <p className='text-zinc-600 leading-[1.7rem]'>10</p>
                    <p className='text-zinc-600 leading-[1.7rem]'>11</p>
                </div>
                <div className='max-w-full w-full text-wrap overflow-x-auto'>
                    {project?.overview.split('.').map((sentence, index) => (
                        sentence.trim() && (
                            <p key={index} className='text-white leading-[1.7rem]'>
                                {sentence.trim() + '.'}
                            </p>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InfoContainer;