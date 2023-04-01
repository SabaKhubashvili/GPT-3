import { styles } from '@/styles'
import React from 'react'

import { motion } from 'framer-motion'
import { SponsorsConst } from '@/Constants'
import useMediaQuery from '@/hooks/useMediaQuery'
import { fadeIn } from '@/utils/motion'

export const Sponsors = () => {
    const isAboveMediumScreens = useMediaQuery('(min-width:1024px)')
    const isAboveSemiLargerScreens = useMediaQuery('(min-width:1210px)')

  return (
    <section   className={`${styles.innerWidth} ${!isAboveSemiLargerScreens && isAboveMediumScreens ? 'mt-64' :'mt-20' }
     mx-auto flex justify-center gap-10 items-center  flex-wrap`}>

        {
          SponsorsConst.map((sponsor,index)=>(
            <motion.img 
            initial='hidden'
            whileInView='show'
            variants={fadeIn('fade','tween',0.2 + index/2 ,'0.4')}
            src={`/assets/Images/Companies/${sponsor}`} className='w-auto h-auto' key={index} alt="Sposnor" width={150} height={150} />
            ))
          }
     </section>
  )
}
