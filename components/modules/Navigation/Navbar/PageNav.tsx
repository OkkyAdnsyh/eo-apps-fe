
import React from 'react'
import Notification from '@/components/modules/Notification/Notification'

const PageNav = ({pathname} : {pathname : string}) => {
  return (
    <>
        <header className='hidden lg:flex w-full items-center justify-between p-6'>
            <article className='flex flex-col gap-y-2'>
                <h1 className='text-3xl font-bold'>
                    Welcome
                </h1>
                <p className='text-lg font-medium text-gray-700/50'>
                    {pathname}
                </p>
            </article>
            <div className='flex gap-x-4'>
                <Notification/>
            </div>
        </header>
    </>
  )
}

export default PageNav