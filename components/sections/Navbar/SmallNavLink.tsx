import { Arrow } from '@/public/assets/svg'
import { Pages } from '@/types'
import Link from 'next/link'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface Props{
    children:React.ReactNode
    to:Pages
    setMenu:(value:boolean) => void
}

export const SmallNavLink = ({children,to,setMenu}:Props) => {
  return (
    <AnchorLink  href={`#${to}`} onClick={()=>{setMenu(false)}} className='text-white text-[24px] border-b-2 border-b-white border-solid pb-4 flex justify-between items-center'>
        <span>
            {children}
        </span>
        <span>
            <Arrow/>
        </span>
    </AnchorLink>
  )
}
