import React from 'react'

interface Props{
    children:React.ReactNode
    type:string
}

export const MainButton = ({children,type}:Props) => {
  return (
    <div className={`${type == 'normal'? 'rounded-md px-12 py-3.5' : 'py-7 px-10 rounded-r-lg'} cursor-pointer bg-secondary-300  text-white `}>
        {children}
    </div>
  )
}
