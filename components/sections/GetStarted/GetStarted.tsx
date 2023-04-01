import useMediaQuery from '@/hooks/useMediaQuery'
import React from 'react'
import { BigTitle } from '../Titles/BigTitle'
import Image from 'next/image'

export const GetStarted = () => {
    const isAboveSmallScreens = useMediaQuery('(min-width:1024px)')
  return (
    <section className='lg:max-w-[1920px]  sm:w-11/12 w-full lg:px-44 md:px-20 px-4 mx-auto mt-16 
    flex justify-between md:flex-row flex-col md:gap-1 gap-10' id='getStarted'>
        <div className='basis-1/2 md:max-w-[40rem] md:min-w-[25rem] md:max-h-[40rem]'>
            <Image src={`/assets/Images/${isAboveSmallScreens ? 'Feature' : 'FeaturedSecond'}.webp`} width={300}   height={100} draggable='false' className='w-full  h-full ' alt="" />
        </div>
        <div className='flex justify-end flex-col basis-1/2 gap-4 mb-10'>
            <p className='text-[#71E5FF]'>
            Request Early Access to Get Started
            </p>
            <BigTitle sentance={['The possibilities are','beyond your imagination']} size='small' />
            <p className='max-w-[40rem] text-[#81AFDD] text-[17px] '>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
            <a href="#" className='text-[#FF8A71] cursor-pointer text-[17px] mt-2'>Request Early Access to Get Started</a>
        </div>
    </section>
  )
}
