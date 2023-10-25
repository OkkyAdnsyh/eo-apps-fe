import React from 'react'

const CardContent = ({children} : {children : React.ReactNode}) => {
  return (
    <article className='flex items-start justify-between'>
        <section className='flex flex-col justify-start items-start gap-x-3'>
            {children}
        </section>
    </article>
  )
}

export default CardContent