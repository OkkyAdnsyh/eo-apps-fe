import Link, { LinkProps } from 'next/link'
import React from 'react'

interface ILinkProps extends LinkProps{
    children : React.ReactNode,
    className : string
}


const LinkButton = ({children, className, ...rest} : ILinkProps) => {
  return (
    <>
        <Link className={className} {...rest}>
            {children}
        </Link>
    </>
  )
}

export default LinkButton