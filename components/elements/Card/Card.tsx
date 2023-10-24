import React from 'react'

const Card = ({children, className} : {children : React.ReactNode, className : string}) => {
  return (
    <div className={`rounded-lg bg-sky-400/40 border-2 border-gray-50 shadow-md ${className}`}>{children}</div>
  )
}

export default Card