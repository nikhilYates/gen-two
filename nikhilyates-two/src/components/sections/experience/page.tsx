import React from 'react'
import { DataTableDemo } from './utilities/table'


// RAG-interactable content here. want to be able to select an experience, 
// interact with it using an LLM + perform a compare/contrast with another experience
// sort experiences by key skills developed, tools used, volunteer work, etc
const Experience = () => {
  return (
    <div className='bg-zinc-950 h-screen w-screen p-16'>

        <div className='border border-white w-full h-full flex flex-row'>
            <div>

                <DataTableDemo />
            </div>
            <div className='w-1/2'>
            </div>
        </div>
        
    </div>
  )
}

export default Experience