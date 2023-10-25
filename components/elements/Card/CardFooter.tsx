import React from 'react'

const CardFooter = ({children} : {children : React.ReactNode}) => {
  return (
    <article className='w-full flex items-center justify-between'>
        {children}
    </article>
  )
}

export default CardFooter