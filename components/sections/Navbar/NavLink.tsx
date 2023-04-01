import { Pages } from '@/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'
  
interface Props{
    children:React.ReactNode
    to:string,
}

export const NavLink = ({children,to}:Props) => {
  return (
    <AnchorLink className="text-white font-medium" href={`#${to}`} >
        {children}
    </AnchorLink>
  )
}
