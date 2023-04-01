import { styles } from '@/styles'
import { AboutType } from '@/types'
import { fadeIn } from '@/utils/motion'
import { motion } from 'framer-motion'
import React from 'react'

interface Props extends AboutType{
  index:number
}

export const AboutComponent = ({title,description,index}:Props ) => {
  return (
    <motion.div
    initial='hidden'
    whileInView='show'
    variants={fadeIn('fade','tween',0.2 + index/10 ,'0.4')} 
    viewport={{once:true}}>
        <h2 className={` ${styles.beforeTopGradient} cursor-pointer md:hover:text-[#60a1d6] transition-colors duration-300 text-white text-[30px] font-extrabold`}>{title}</h2>

        <p className="mt-10 text-[#81AFDD] text-[20px]">
            {description}
        </p>
    </motion.div>
  )
}
