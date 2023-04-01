import { BlogData } from '@/Constants'
import React from 'react'
import { BigTitle } from '../Titles/BigTitle'
import { BlogComponent } from './BlogComponent'
import { Pages } from '@/types'

export const Blog = () => {
  return (
    <section className='lg:max-w-[1920px] sm:w-11/12 w-full mx-auto mt-16 sm:px-0 px-4' id={Pages.blog}>
        <BigTitle sentance={['A lot is happening','We are blogging about it.']} size='big' />

        <div className='grid md:grid-rows-2 md:grid-cols-4 grid-cols-1 grid-flow-dense 
        gap-x-6 gap-y-4 h-fit mt-10'>

            {
                BlogData.map((blog,index)=>(
                    <BlogComponent {...blog}  key={index}/>
                ))
            }

        </div>
    </section>
  )
}
