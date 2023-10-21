import React, { HTMLProps } from 'react'

const FormControl = ({className, children, ...rest} : HTMLProps<HTMLFormElement>) => {
  return (
    <form className={className} {...rest}>
        {children}
    </form>
  )
}

export default FormControl