import Insight from '@/components/modules/Insight/Insight'
import React from 'react'

const page = () => {
  return (
    <>
      <section className='flex flex-col gap-y-2'>
        <section className='w-full grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 gap-y-4 md:gap-y-0 md:gap-x-4'>
          <Insight className='bg-red-100' title='Ticket' data='27.8K' desc='Sold'/>
          <Insight className='bg-yellow-100' title='Event' data='278' desc='Finished'/>
          <Insight className='bg-sky-100' title='Revenue' data='20%' desc='Increased'/>
          <Insight className='bg-indigo-100' title='Spending' data='20%' desc='Increased'/>
        </section>
      </section>
    </>
  )
}

export default page