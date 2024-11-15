import React from 'react'
import contents from '../../../data/contents.json';
import NavCard from './components/NavCard';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Separator } from '@/components/ui/separator';






const LandingPage = () => {
  return (
    <div className='bg-zinc-950 h-screen p-16'>
      <div className='w-full h-full flex flex-row justify-between'>
        <div className='h-full w-full flex flex-col justify-top pt-20'>
          <h1 className="text-[35rem] font-black tracking-tighter text-zinc-900 leading-[10rem]">nikhil<br /><span className='text-zinc-800'>yates</span></h1>
          <h1 className="mt-[20rem] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">entrepreneur, software engineer, designer</h1>
          <p className="text-2xl leading-7 [&:not(:first-child)]:mt-6 text-gray-100">working at the intersection of tech business and design. yes that ven diagram exists and i'm in the center of it</p>
        </div>
        {/* smart navigation divs */}
        <div className='h-full w-max flex flex-col justify-end'>
          <div className='h-full flex flex-col justify-end'>
            <div className='flex max-w-max flex-row justify-end gap-1'>
              {contents.map((content) => (
                <NavCard content={content} />
              ))}
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}

export default LandingPage