import { AboutConst } from '@/Constants'
import { styles } from '@/styles'
import Link from 'next/link'
import React from 'react'
import { BigTitle } from '../Titles/BigTitle'
import { AboutComponent } from './AboutComponent'
import { Pages } from '@/types'

export const About = () => {
  return (
    <section className={`lg:max-w-[1920px]  sm:w-11/12  w-full sm:px-5 px-4 mx-auto mt-20 bg-[#042C54]  relative py-16 md:px-10`}
    id={Pages.about}>
        <div className="bg-gradient-03 absolute sm:w-[20rem] sm:h-[20rem] -top-10 -left-10 " />   
        <div className="bg-gradient-03 absolute right-0 bottom-0 sm:w-[20rem] sm:h-[20rem] " />   
        
        <div className='flex flex-col gap-24'>

        <div className='flex justify-start items-start md:flex-row flex-col md:gap-0 gap-6'>
            <div className='basis-1/4 font-extrabold text-white z-10 text-[29px] md:hover:text-[#60a1d6] cursor-pointer transition-colors duration-300
            relative before:absolute before:w-20 before:h-2 before:bg-gradient-to-r before:-top-4 before:from-[#AE67FA] before:to-[#F49867] before:rounded-lg'>
             What is GPT-3
            </div>
            <div className="basis-3/4 text-[#81AFDD] text-[24px] z-10">
            We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
            </div>
        </div>
        <div className='flex md:justify-between md:items-center z-10 md:flex-row flex-col md:gap-0 gap-4'>
            <BigTitle size='small' sentance={['The possibilities are beyond','your imagination']} />

            <Link href='#' className='text-[#FF8A71]' >Explore The Library</Link>
        </div>

        <div className='flex md:justify-between md:flex-row flex-col z-10 md:gap-10 gap-20 '>
            {
                AboutConst.map((about,index)=>(
                    <AboutComponent key={index} index={index} {...about} />
                ))
            }   
        </div>

        </div>

    </section>
  )
}
