import React, { HTMLAttributes} from 'react'

interface IToggleProps extends HTMLAttributes<HTMLButtonElement>{
    children : React.ReactNode
}

const Toggle = ({className, children, ...rest} : IToggleProps) => {
  return (
    <button type="button" className={`p-2 ${className}`} {...rest}>
        {children}
    </button>
  )
}

export default Toggle