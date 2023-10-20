import React, {ButtonHTMLAttributes} from 'react'

interface IBtnProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    name : string,
    className : string
}

const Button = ({name, className, ...rest} : IBtnProps) => {
  return (
    <button className={`px-8 py-2 text-md ${className}`} {...rest}>{name}</button>
  )
}

export default Button