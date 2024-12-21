import react from 'react'

const About = () => {

    return (
        <div id='about' className='bg-zinc-950 p-8 h-auto min-h-screen xl:p-16 flex flex-col justify-start gap-8'>
            <h1 className='scroll-m-20 text-6xl font-extrabold tracking-tight 2xl:text-8xl text-zinc-500 leading-[4rem]'><span className='text-white'>nikhil yates</span> is a <span className='text-white'>
            versatile full-stack engineer and entrepreneur </span> based in <span className='text-white'>Toronto. </span>
             With a solid foundation in computer science and a knack for <span className='text-white'>solving complex problems</span> across <span className='text-white'>various domains</span>, nikhil's
            interests span <span className='text-white'> web3, generative ai, data interactivity, robotics, and UI.</span></h1>
            <h1 className='scroll-m-20 text-6xl font-extrabold tracking-tight 2xl:text-8xl text-zinc-500 leading-[4rem]'>
                <span className='text-white'>TLDR: </span> i like <span className='text-white'>stuff(building + designing + learning)</span>. how's that for professional
            </h1>
            <h1 className='scroll-m-20 text-6xl font-extrabold tracking-tight 2xl:text-8xl text-zinc-500 leading-[4rem]]'>
                want to collaborate? let's get in <span className='underline text-white'>contact.</span>
            </h1>
        </div>
    )
}

export default About;