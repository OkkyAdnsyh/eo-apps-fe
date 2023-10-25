import React from 'react'

const CardTitle = ({children} : {children : React.ReactNode}) => {
  return (
    <article className='flex gap-x-2 items-center justify-start'>
        {children}
    </article>
  )
}

export default CardTitle