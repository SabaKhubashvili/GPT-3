import React from 'react'
import { FeaturesType } from '@/types'

import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

interface Props extends FeaturesType{
    index:number
}


export const FeaturesCompontent = ({index,title,description}:Props) => {

    
  return (
    <motion.div variants={fadeIn('right','spring',index/10,1)} initial='hidden' whileInView='show' viewport={{once:true}} className='flex justify-between sm:flex-row flex-col gap-10 text-white'>
        <div className='min-w-[11rem] text-[20px] leading-[24px]
        font-extrabold relative before:absolute before:w-10 before:h-1 before:bg-gradient-to-r before:-top-4 before:from-[#AE67FA] before:to-[#F49867] before:rounded-lg'>
            {title}
        </div>
        <div className='text-[#81AFDD]'>
            {description}
        </div>
    </motion.div>
  )
}
