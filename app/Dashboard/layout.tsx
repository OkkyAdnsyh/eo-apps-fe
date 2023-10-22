import MainNav from '@/components/modules/Navigation/MainNav/MainNav'
import MobileNav from '@/components/modules/Navigation/Navbar/MobileNav'
import React from 'react'

const layout = ({children} : {children : React.ReactNode}  ) => {
  return (
    <div className='flex'>
      <MobileNav/>
      <MainNav/>
      <main className='bg-sky-300/15 flex-grow-[100] relative'>
        {children}
      </main>
    </div>
  )
}

export default layout