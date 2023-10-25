import React from 'react'

const Card = ({children, className} : {children : React.ReactNode, className : string}) => {
  return (
    <div className={`rounded-lg shadow-lg p-5 ${className}`}>{children}</div>
  )
}

export default Card