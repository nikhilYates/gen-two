import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExperienceGraph } from './Chart'
import { ExperienceType } from '@/lib/definitions'

interface ExperienceCardProps {
    experience: ExperienceType
}

const ExperienceCardSmall = ({ experience }: ExperienceCardProps ) => {
  return (
    <Card className='w-full sm:w-1/2 bg-inherit h-auto text-white border-zinc-600 rounded-2xl hover:border-zinc-300 transition-colors ease-in-out duration-500'>
        <CardHeader className='flex flex-row justify-between'>
            <div>
                <CardTitle className='font-bold text-4xl'>
                {experience.title ?? 'Job Title'}
                </CardTitle>
                <CardDescription className='mt-1 text-2xl font-bold'>
                    {experience.company ?? 'Company Name'}
                </CardDescription>
            </div>
            <div>
                <Badge variant={'secondary'} className='text-black'>{experience.startDate.toLocaleDateString()} - {experience.endDate.toLocaleDateString()}</Badge>
            </div>
        </CardHeader>
        <CardContent>
            <div className='flex flex-col justify-between gap-4 h-full'>
                <div className='w-[100%]'>
                    <ExperienceGraph />
                </div>
                <div className='w-full'>
                    <h3 className='mb-2 scroll-m-20 text-2xl font-medium tracking-tight'>tech</h3>
                    <div>
                    {experience.skills.map((skill, index) => (
                        <Badge key={index} className='mr-1 mb-1' variant={'destructive'}>{skill}</Badge>
                    ))}
                    </div>
                </div>
            </div>
        </CardContent>
        <CardFooter className='flex flex-row justify-end gap-1'>
            <Badge>{experience.frequency}</Badge>
            <Badge>{experience.location}</Badge>
        </CardFooter>
    </Card>
  )
}

export default ExperienceCardSmall