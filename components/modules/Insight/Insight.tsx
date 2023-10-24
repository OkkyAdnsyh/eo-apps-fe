import Card from '@/components/elements/Card/Card'
import React from 'react'

interface IInsightProps {
  title : string,
  data : string,
  desc : string,
  className : string 
}

const Insight = ({title, data, desc, className} : IInsightProps) => {
  return (
    <>
        <Card className={`flex flex-col gap-y-3 ${className}`}>
          <article className='flex flex-col gap-y-1 items-start justify-between'>
            <p className='text-lg font-bold text-gray-950'>{title}</p>
            <p className='text-sm text-gray-400'>Since latest event</p>
          </article>
          <article className='flex items-start justify-between'>
            <section className='flex items-end gap-x-3'>
              <p className='text-2xl font-bold text-gray-950'>{data}</p>
              <p className='text-md font-bold text-gray-800'>{desc}</p>
            </section>
          </article>
        </Card>
    </>
  )
}

export default Insight