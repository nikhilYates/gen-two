import React from 'react'


const LandingPage = () => {
  return (
    <div className='bg-black h-screen'>
        <div className='h-full flex flex-col justify-start p-8'>
            <div className='w-full h-screen flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='w-max flex flex-col justify-center items-start'>
                    <blockquote className="text-white mt-6 border-l-2 pl-6 text-lg">
                        full-stack
                    </blockquote>
                    <blockquote className="text-white mt-6 border-l-2 pl-6 text-lg">
                        portfolio
                    </blockquote>
                    <blockquote className="text-white mt-6 border-l-2 pl-6 text-lg">
                        experience
                    </blockquote>
                    <blockquote className="text-white mt-6 border-l-2 pl-6 text-lg">
                        contact
                    </blockquote>
                </div>
            </div>
            <div>
                <h1 className='text-white scroll-m-20 text-[12rem] font-extrabold tracking-tight lg:text-[10rem]'>nikhil yates</h1>
                <p className="text-xl text-muted-foreground">
                    for any inquiries or to tell me how cool <br />you think i am, email <span className='text-green-400'> nikhilyates.work@gmail.com </span>
                </p>
            </div>
        </div>

    </div>
  )
}

export default LandingPage