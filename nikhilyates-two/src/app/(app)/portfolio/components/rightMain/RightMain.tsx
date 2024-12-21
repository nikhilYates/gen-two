import react from 'react'
import Image from 'next/image'
import { ProjectType } from '@/lib/definitions'


type MediaContainerProps = {
    project: ProjectType | null;
}

const MediaContainer: React.FC<MediaContainerProps> = ({ project }) => {
    if(!project) return;

    const isVideo = project.mediaUrl.endsWith('.mp4');
    const isEmpty = project.mediaUrl === '';

    return (
        <div className='p-4 h-full flex flex-row justify-center items-center'>
            {isEmpty ? (
                <Image 
                    src="assets/svgs/nyWhite.svg"
                    alt="NY Logo"
                    width={200}
                    height={200}
                    className="opacity-50"
                />
            ) : isVideo ? (
                <video 
                    className='w-[70%] 2xl:w-[60%] object-cover'
                    loop
                    muted
                    playsInline
                    controls
                >
                    <source src={project.mediaUrl} type="video/mp4" />
                </video>
            ) : (
                <div 
                    style={{
                        backgroundImage: `url(${project.mediaUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top left',
                        width: '100%',
                        height: '100%'
                    }} 
                    className='2xl:w-[60%]'
                />
            )}
        </div>
    )
}

export default MediaContainer;