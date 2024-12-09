import react from 'react';
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import file from '../../../public/assets/svgs/hero/File.svg'
import search from '../../../public/assets/svgs/hero/Search.svg'
import music from '../../../public/assets/svgs/hero/Music.svg'
import locked from '../../../public/assets/svgs/hero/Locked.svg'


const Portfolio = () => {

    // want to look like an IDE with project names as files on the left -> when we click on one, load component into the right
    return (
        <div id='portfolio' className='bg-zinc-950 h-screen w-screen p-16 flex flex-col gap-8'>
            <div className='w-full flex flex-col gap-3'>
                <h1 className='scroll-m-20 text-4xl font-extralight tracking-tight lg:text-8xl text-white'>portfolio</h1>
            </div>
            <div className='h-full w-full border border-zinc-500 rounded-lg p-4 flex flex-row justify-between gap-4'>
                <div className='h-full w-[15%] bg-zinc-900 rounded-lg flex flex-col justify-start gap-4'>
                    <div>
                        <Tabs defaultValue="files" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 bg-zinc-950 text-white rounded-none">
                                <TabsTrigger value="files" className="data-[state=active]:bg-zinc-800"><Image priority src={file} alt='file-icon' className='h-5 w-5'/></TabsTrigger>
                                <TabsTrigger disabled value="search" className="data-[state=active]:bg-zinc-800"><Image priority src={search} alt='search-icon' className='h-5 w-5'/></TabsTrigger>
                                <TabsTrigger disabled value="fork" className="data-[state=active]:bg-zinc-800"><Image priority src={music} alt='music-icon' className='h-5 w-5'/></TabsTrigger>
                                <TabsTrigger disabled value="misc" className="data-[state=active]:bg-zinc-800"><Image priority src={locked} alt='locked-icon' className='h-5 w-5'/></TabsTrigger>
                            </TabsList>
                            <TabsContent value='files'>
                                
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <div className='h-full w-full border border-zinc-700 rounded-lg p-4'>

                </div>
            </div>
        </div>
    )
}

export default Portfolio;