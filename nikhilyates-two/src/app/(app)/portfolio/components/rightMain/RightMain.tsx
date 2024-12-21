import react from 'react'
import Image from 'next/image'
import { ProjectType } from '@/lib/definitions'

type MediaContainerProps = {
    project: ProjectType | null;
}

const MediaContainer: React.FC<MediaContainerProps> = ({ project }) => {
    if(!project) return;
    return (
        <div className='p-4 h-full' style={{
            backgroundImage: `url(${project?.mediaUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left top'
        }}>
        </div>
    )
}

export default MediaContainer;