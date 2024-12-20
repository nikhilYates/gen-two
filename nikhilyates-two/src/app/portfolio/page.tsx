"use client"

import react, { useState } from 'react';
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
import InfoContainer from './components/leftMain/page'
import MediaContainer from './components/rightMain/page'
import BottomContainer from './components/bottom/page'
import projects from '../../../data/projects.json'
import { ProjectType } from '@/lib/definitions'
  

import file from '../../../public/assets/svgs/hero/File.svg'
import search from '../../../public/assets/svgs/hero/Search.svg'
import music from '../../../public/assets/svgs/hero/Music.svg'
import locked from '../../../public/assets/svgs/hero/Locked.svg'
import play from '../../../public/assets/svgs/hero/Play.svg'
import paper from '../../../public/assets/svgs/hero/Paper.svg'



const Portfolio = () => {


    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);


    const projectsByCategory = projects.reduce((acc: { [key: string]: any[] }, project) => {
        const category = project.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(project);
        return acc;
    }, {});

    // Helper function to determine icon based on filename extension
    const getIconForFile = (filename: string) => {
        const extension = filename.split('.').pop()?.toLowerCase();
        switch(extension) {
            case 'ppr':
                return paper;
            default:
                return play;
        }
    };

    const handleFileClick = (project: ProjectType) => {
        setSelectedProject(project);
    }

    return (
        <div id='portfolio' className='bg-zinc-950 h-screen w-screen p-16 flex flex-col gap-8'>
            <div className='w-full flex flex-col gap-3'>
                <h1 className='scroll-m-20 text-4xl font-extralight tracking-tight lg:text-8xl text-white'>portfolio</h1>
            </div>
            <div className='h-full w-full border border-zinc-500 rounded-lg p-4 pl-0 flex flex-row justify-between gap-4'>
                <div className='h-full w-[15%] flex flex-col justify-start gap-4 border-r border-zinc-500'>
                    <div>
                        <Tabs defaultValue="files" className="w-full">
                            <TabsList className="grid w-full pl-4 grid-cols-3 bg-zinc-950 text-white rounded-none">
                                <TabsTrigger value="files" className="data-[state=active]:bg-zinc-800"><Image priority src={file} alt='file-icon' className='h-5 w-5'/></TabsTrigger>
                                <TabsTrigger disabled value="music" className="data-[state=active]:bg-zinc-800"><Image priority src={music} alt='music-icon' className='h-5 w-5'/></TabsTrigger>
                                <TabsTrigger disabled value="misc" className="data-[state=active]:bg-zinc-800"><Image priority src={locked} alt='locked-icon' className='h-5 w-5'/></TabsTrigger>
                            </TabsList>
                            <TabsContent value='files'>
                                {Object.entries(projectsByCategory).map(([category, categoryProjects]) => (
                                    <Accordion key={category} type='multiple' defaultValue={["item-1"]}>
                                        <AccordionItem value="item-1" className='w-full'>
                                            <AccordionTrigger className='pl-4 text-orange-400 hover:no-underline hover:bg-zinc-900'>{category}</AccordionTrigger>
                                            {categoryProjects.map((project) => (
                                                <AccordionContent key={project.id} className='w-full hover:underline hover:cursor-pointer' onClick={() => handleFileClick(project)}>
                                                    <Image 
                                                        priority 
                                                        src={getIconForFile(project.filename)} 
                                                        alt='file-icon' 
                                                        className='h-4 w-4'
                                                    />
                                                    {project.filename}
                                                </AccordionContent>
                                            ))}
                                        </AccordionItem>
                                    </Accordion>
                                ))}
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
                        <div className='w-[40%] border rounded-lg border-zinc-800'>
                            <InfoContainer project={selectedProject}/>
                        </div>
                        <div className='w-[60%] border rounded-lg border-zinc-800 overflow-hidden'>
                            <MediaContainer project={selectedProject}/>  
                        </div>
                    </div>
                    <div className='w-full border border-zinc-800 rounded-lg h-[25%]'>
                            <BottomContainer project={selectedProject} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;