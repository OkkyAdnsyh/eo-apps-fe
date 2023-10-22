import React from 'react'

const DropItem = ({children, className} : {children : React.ReactNode, className? : string}) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default DropItem