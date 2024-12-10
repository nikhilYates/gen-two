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
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

import file from '../../../public/assets/svgs/hero/File.svg'
import search from '../../../public/assets/svgs/hero/Search.svg'
import music from '../../../public/assets/svgs/hero/Music.svg'
import locked from '../../../public/assets/svgs/hero/Locked.svg'
import play from '../../../public/assets/svgs/hero/Play.svg'
import paper from '../../../public/assets/svgs/hero/Paper.svg'



const Portfolio = () => {

    // want to look like an IDE with project names as files on the left -> when we click on one, load component into the right
    return (
        <div id='portfolio' className='bg-zinc-950 h-screen w-screen p-16 flex flex-col gap-8'>
            <div className='w-full flex flex-col gap-3'>
                <h1 className='scroll-m-20 text-4xl font-extralight tracking-tight lg:text-8xl text-white'>portfolio</h1>
            </div>
            <div className='h-full w-full border border-zinc-500 rounded-lg p-4 flex flex-row justify-between gap-4'>
                <div className='h-full w-[15%] flex flex-col justify-start gap-4 border-r border-zinc-500'>
                    <div>
                        <Tabs defaultValue="files" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 bg-zinc-950 text-white rounded-none">
                                <TabsTrigger value="files" className="data-[state=active]:bg-zinc-800"><Image priority src={file} alt='file-icon' className='h-5 w-5'/></TabsTrigger>
                                <TabsTrigger disabled value="fork" className="data-[state=active]:bg-zinc-800"><Image priority src={music} alt='music-icon' className='h-5 w-5'/></TabsTrigger>
                                <TabsTrigger disabled value="misc" className="data-[state=active]:bg-zinc-800"><Image priority src={locked} alt='locked-icon' className='h-5 w-5'/></TabsTrigger>
                            </TabsList>
                            <TabsContent value='files'>
                                <Accordion type='multiple' defaultValue={["item-1"]}>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>algorithms-and-ai</AccordionTrigger>
                                        <AccordionContent>
                                            <Image priority src={play} alt='file-icon' className='h-4 w-4'/>
                                            rag_based_llm.ai
                                        </AccordionContent>
                                        <AccordionContent>
                                            <Image priority src={play} alt='file-icon' className='h-4 w-4'/>
                                            rrt_pathfinding.alg
                                        </AccordionContent>
                                        <AccordionContent>
                                            <Image priority src={play} alt='file-icon' className='h-4 w-4'/>
                                            tf_line_following.ai
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <Accordion type='multiple' defaultValue={["item-1"]}>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>saas-and-web</AccordionTrigger>
                                        <AccordionContent>
                                            <Image priority src={play} alt='file-icon' className='h-4 w-4'/>
                                            book_gpt.saas
                                        </AccordionContent>
                                        <AccordionContent>
                                        <Image priority src={play} alt='file-icon' className='h-4 w-4'/>
                                            scorpionlabz.web
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <Accordion type='multiple' defaultValue={["item-1"]}>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>embd-and-robotics</AccordionTrigger>
                                        <AccordionContent>
                                            <Image priority src={play} alt='file-icon' className='h-4 w-4'/>
                                            dc_motor.embd
                                        </AccordionContent>
                                        <AccordionContent>
                                        <Image priority src={play} alt='file-icon' className='h-4 w-4'/>
                                            kinova_g3.rob
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <Accordion type='multiple' defaultValue={["item-1"]}>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>writing</AccordionTrigger>
                                        <AccordionContent>
                                            <Image priority src={paper} alt='file-icon' className='h-4 w-4'/>
                                            llm_tc_gen.ppr
                                        </AccordionContent>
                                        <AccordionContent>
                                        <Image priority src={paper} alt='file-icon' className='h-4 w-4'/>
                                            health_dt.ppr
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                {/* 
                    actual data display
                    should be converted into its own component
                 */}
                <div className='h-full w-full flex flex-col gap-4'>
                    <div className='w-full flex flex-row gap-4 h-[75%]'>
                        <div className='flex-1 border rounded-lg border-zinc-800'>
                            
                        </div>
                        <div className='flex-1 border rounded-lg border-zinc-800'>

                        </div>
                    </div>
                    <div className='w-full border border-zinc-800 rounded-lg h-[25%]'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;