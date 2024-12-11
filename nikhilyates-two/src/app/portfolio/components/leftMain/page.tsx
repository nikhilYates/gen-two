import react from 'react'
import Image from 'next/image'

const InfoContainer = () => {

    return (
        <div className='w-full h-full flex flex-row justify-start p-4 gap-4'>
            <div className='h-full w-auto flex flex-col justify-start gap-1'>
                <p className='text-zinc-600'>1</p>
                <p className='text-zinc-600'>2</p>
                <p className='text-zinc-600'>3</p>
                <p className='text-zinc-600'>4</p>
                <p className='text-zinc-600'>5</p>
                <p className='text-zinc-600'>6</p>
                <p className='text-zinc-600'>7</p>
            </div>
            <div className='w-full overflow-x-auto'>
                <p className='text-orange-400'>overview</p>
                <p className='text-white'>this project was about this and this and that</p>
                <p className='text-white'></p>
                <p className='text-white'>this project was about this and this and that</p>
            </div>
        </div>
    )
}

export default InfoContainer;