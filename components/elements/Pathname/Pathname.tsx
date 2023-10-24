"use client"

import React from 'react'
import { usePathname } from 'next/navigation'

const Pathname = () => {
    const path : string = usePathname()
    const pathname : string[] = path.split('/')

  return (
    <p className='text-md md:text-xl font-bold text-gray-950'>
        {pathname.length === 2 ? pathname[1] : pathname[2]}
    </p>
  )
}

export default Pathname