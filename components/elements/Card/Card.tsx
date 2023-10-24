import React from 'react'

const Card = ({children, className} : {children : React.ReactNode, className : string}) => {
  return (
    <div className={`rounded-lg shadow-sm p-3 ${className}`}>{children}</div>
  )
}

export default Card