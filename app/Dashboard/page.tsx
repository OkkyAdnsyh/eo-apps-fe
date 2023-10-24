import Insight from '@/components/modules/Insight/Insight'
import React from 'react'

const page = () => {
  return (
    <>
      <section className='flex flex-col gap-y-2 px-4'>
        <section className='w-full grid grid-rows-4 gap-x-4'>
          <Insight/>
        </section>
      </section>
    </>
  )
}

export default page