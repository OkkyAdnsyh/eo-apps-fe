"use client"

import React from 'react'
import Notification from '@/components/modules/Notification/Notification'
import { usePathname } from 'next/navigation'

const PageNav = () => {
    const path : string = usePathname()
    const pathname : string[] = path.split('/')
    console.log(pathname)
  return (
    <>
        <header className='flex w-full items-center justify-between px-8 py-6 lg:p-6'>
            <article className='flex flex-col gap-y-2'>
                <h1 className='text-xl lg:text-3xl font-bold'>
                    {path === '/Dashboard' ? 'Welcome' : 'Costumize'}
                </h1>
                <p className='text-md lg:text-lg font-medium text-gray-700/50'>
                    {pathname.length === 2 ? pathname[1] : pathname[2]}
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