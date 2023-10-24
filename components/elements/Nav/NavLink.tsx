import Link, { LinkProps } from 'next/link'
import React from 'react'

interface INavLinkProps extends LinkProps{
    children : React.ReactNode,
    className : string
}

const NavLink = ({children, className,...rest} : INavLinkProps) => {
  return (
    <Link className={`w-full flex items-center justify-start gap-x-6 ${className}`} {...rest}>
        {children}
    </Link>
  )
}

export default NavLink