import React from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'

import { styles } from '@/styles'

import { MainButton } from '@/components/Buttons'
import { BigTitle } from '../Titles/BigTitle'
import Image from 'next/image'
import { Pages } from '@/types'


export const MainBanner = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1024px)')
  const isAboveSemiLargerScreens = useMediaQuery('(min-width:1210px)')
  return (
    <section className={`${styles.innerWidth} mx-auto mt-20 flex justify-between relative`} id={Pages.home}>
            <div className='md:basis-1/2 flex flex-col gap-4'>
                  <BigTitle size='large' sentance={['Let’s Build Something','amazing with GPT-3','OpenAI']}  />
                  <div className={`${!isAboveSemiLargerScreens && isAboveMediumScreens ? 'absolute   -bottom-52' : ''}  flex gap-4 flex-col`}>
                   <p className='text-[#81AFDD] sm:text-[20px] text-[15px]'>Yet bed any for travelling assistance indulgence unpleasing.
                     Not thoughts all exercise blessing. 
                    Indulgence way everything joy alteration boisterous
                     the attachment. Party we years to order allow asked of.</p>

                  <div className='relative'>
                    <label htmlFor="input"></label>
                      <input type="text" className='w-full h-[5rem] py-2 px-4 outline-none r
                      text-[#3D6184] bg-[#052D56] rounded-lg' name='input' aria-label='Enter Something' />
                      <div className="absolute right-0 top-0">
                        <MainButton type='form'>Get Started</MainButton>
                      </div>
                     
                    </div>
                  <div className='flex items-center gap-4 sm:flex-nowrap flex-wrap'>
                    <Image src='/assets/Images/People.webp' className=' w-auto h-auto' alt='Pople' width={250} height={100} />   
                    <p className='text-[#FFF] text-[18px]'>1,600 people requested access a visit in last 24 hours</p>
                  </div>
                  </div>
            </div>

          { isAboveMediumScreens &&
            <div className='basis-1/2 relative '>

            <Image src="/assets/Images/Banners/MainBanner.webp" 
            className='max-w-[40rem] min-w-[40rem] w-[100%] -mt-32 ml-auto' 
            alt="MainBannerImage"
            width={400} height={100}
            draggable='false' />
            <div className="bg-gradient-02 absolute w-96 h-96 top-20 left-0 right-0 ml-auto mr-[130px] -z-[1]"/>

            </div>
          }
    </section>
  )
}
