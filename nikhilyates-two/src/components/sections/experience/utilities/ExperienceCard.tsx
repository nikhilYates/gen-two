import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExperienceGraph } from './Chart'
import { ExperienceType } from '@/lib/definitions'

interface ExperienceCardProps {
    experience: ExperienceType
}

const ExperienceCard = ({ experience }: ExperienceCardProps ) => {
  return (
    <Card className='bg-inherit text-white '>
        <CardHeader className='flex flex-row justify-between'>
            <div>
                <CardTitle>
                {experience.title ?? 'Job Title'}
                </CardTitle>
                <CardDescription className='text-lg font-semibold'>
                    {experience.company ?? 'Company Name'}
                </CardDescription>
            </div>
            <div>
                <Badge variant={'secondary'} className='text-black'>{experience.startDate.toLocaleDateString()} - {experience.endDate.toLocaleDateString()}</Badge>
            </div>
        </CardHeader>
        <CardContent>
            <div className='flex flex-row justify-between gap-4'>
                <div className='w-1/2 flex flex-col justify-start'>
                    <h3 className='mb-2 scroll-m-20 text-2xl font-medium tracking-tight'>overview</h3>
                    <p className='leading-7 [&:not(:first-child)] text-white'>
                        {experience.description}
                    </p>
                </div>
                <div className='w-1/2'>
                    <ExperienceGraph />
                </div>
            </div>
            <h3 className='mb-2 scroll-m-20 text-2xl font-medium tracking-tight'>notables</h3>
            <div className='w-1/2'>
                <Badge className='mr-1 mb-1' variant={'destructive'}>RAG</Badge>
                <Badge className='mr-1 mb-1' variant={'destructive'}>TypeScript</Badge>
                <Badge className='mr-1 mb-1' variant={'destructive'}>React Native</Badge>
                <Badge className='mr-1 mb-1' variant={'destructive'}>PostgreSQL</Badge>
                <Badge className='mr-1 mb-1' variant={'destructive'}>PostgreSQL</Badge>
                <Badge className='mr-1 mb-1' variant={'destructive'}>PostgreSQL</Badge>
            </div>
        </CardContent>
        <CardFooter>
            <Badge>fulltime</Badge>
        </CardFooter>
    </Card>
  )
}

export default ExperienceCard