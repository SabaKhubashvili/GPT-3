import React from 'react'

import { FeaturesData } from '@/Constants'


import { BigTitle } from '../Titles/BigTitle'
import { FeaturesCompontent } from './FeaturesCompontent'

export const Feature = () => {
  return (
    <section className={`lg:max-w-[1920px]  sm:w-11/12 w-full  sm:px-0 px-4 mx-auto mt-16 grid  md:grid-cols-2 grid-cols-1 md:gap-0 gap-20 relative`}>
        <div className="bg-gradient-04 absolute -z-[10] -left-40 top-0 text-white sm:w-[20rem] w-1/2 h-[20rem] " >Saba</div>
        <div className='flex flex-col gap-4 grid-cols-1 '>
            <BigTitle size='small' 
            sentance={['The Future is Now and','You Just Need To Realize','It. Step into Future Today','& Make it Happen.']} />
            <p className='text-[#FF8A71] text-[14px] cursor-pointer'>
            Request Early Access to Get Started
            </p>
        </div>
        <div className="grid-cols-2 flex flex-col gap-20 mt-8">
            {
                FeaturesData.map((feature,index)=>(
                    <FeaturesCompontent index={index} key={index} {...feature} />
                ))
            }
        </div>
    </section>
  )
}
