import Card from '@/components/elements/Card/Card'
import React from 'react'

const Insight = ({children} : {children? : React.ReactNode}) => {
  return (
    <>
        <Card className='flex flex-col'>
          <article className='flex items-center justify-between'>
            
          </article>
          {children}
        </Card>
    </>
  )
}

export default Insight