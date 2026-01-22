import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExperienceGraph } from './Chart'
import { ExperienceType } from '@/lib/definitions'

interface ExperienceCardProps {
    experience: ExperienceType
}

const ExperienceCardLarge = ({ experience }: ExperienceCardProps ) => {

    if(!experience) return null;

    return (
        <Card className='bg-inherit w-full text-white border-zinc-600 rounded-2xl h-auto hover:border-zinc-300 transition-colors ease-in-out duration-500 flex flex-col'>
            <CardHeader className='flex flex-col justify-start gap-2 md:flex-row md:justify-between md:gap-0'>
                <div>
                    <CardTitle className='font-bold text-2xl md:text-2xl'>
                    {experience.title ?? 'Job Title'}
                    </CardTitle>
                    <CardDescription className='mt-1 text-2xl md:text-3xl font-light'>
                        {experience.company ?? 'Company Name'}
                    </CardDescription>
                </div>
                <div>
                    <Badge variant={'secondary'} className='text-black'>{experience.startDate} - {experience.endDate}</Badge>
                </div>
            </CardHeader>
            <CardContent className='flex-grow'>
                <div className='flex flex-col h-full gap-8'>
                    
                    {/* Top Section: Overview, Notables, Graph */}
                    <div className='flex flex-col 2xl:flex-row justify-between gap-6 flex-grow'>
                        <div className='w-full lg:w-full flex flex-col justify-start lg:w-[50%]'>
                            <h3 className='mb-2 scroll-m-20 text-2xl font-medium tracking-tight'>overview</h3>
                            <p className='leading-7 [&:not(:first-child)] text-white/90'>
                                {experience.description}
                            </p>
                            
                            {experience.achievements && experience.achievements.length > 0 && (
                                <>
                                    <h3 className='mt-6 mb-2 scroll-m-20 text-2xl font-medium tracking-tight'>notables</h3>
                                    <ul className="ml-6 list-disc [&>li]:mt-2 text-white/90">
                                        {experience.achievements.map((achievement, index) => (
                                            <li key={index}><span className="font-medium">{achievement}</span></li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                        <div className='w-full lg:w-[30%]'>
                            <ExperienceGraph chartData={experience.chartData!} chartColor={experience.id}/>
                        </div>
                    </div>

                    {/* Middle Section: Key Projects */}
                    {experience.projects && experience.projects.length > 0 && (
                        <div className='w-full'>
                            <h3 className='mb-4 scroll-m-20 text-2xl font-medium tracking-tight'>key projects</h3>
                            <div className='grid grid-cols-1 gap-4'>
                                {experience.projects.map((project, idx) => (
                                    <div 
                                        key={idx} 
                                        className='flex flex-col p-4 rounded-xl border border-zinc-700/50 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors'
                                    >
                                        <div className='flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2'>
                                            <h4 className='text-lg font-bold text-zinc-100 tracking-tight'>
                                                {project.title}
                                            </h4>
                                            <div className='flex flex-wrap gap-1'>
                                                {project.tech.map((t, i) => (
                                                    <Badge 
                                                        key={i} 
                                                        variant="outline" 
                                                        className='text-xs font-normal border-zinc-600 text-zinc-400'
                                                    >
                                                        {t}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <ul className='ml-4 list-disc space-y-2 text-sm text-zinc-300'>
                                            {project.details.map((detail, i) => (
                                                <li key={i} className='leading-relaxed'>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Bottom Section: Tech Stack */}
                    <div className='mt-auto'>
                        <h3 className='mb-2 scroll-m-20 text-2xl font-medium tracking-tight'>tech</h3>
                        <div className='flex flex-wrap gap-1'>
                            {experience.skills.map((skill, index) => (
                                <Badge key={index} className='text-sm py-0.5' variant={'destructive'}>{skill}</Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className='flex flex-row justify-end gap-2 mt-4'>
                <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">{experience.frequency}</Badge>
                <Badge variant="secondary" className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">{experience.location}</Badge>
            </CardFooter>
        </Card>
    )
}

export default ExperienceCardLarge;