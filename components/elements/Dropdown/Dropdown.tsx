import React from 'react'

const Dropdown = ({children, className} : {children : React.ReactNode, className? : string}) => {
  return (
    <>
        <ul className={`absolute overflow-x-hidden overflow-y-scroll ${className} scrollbar`}>
            {children}
        </ul>
    </>
  )
}

export default Dropdown