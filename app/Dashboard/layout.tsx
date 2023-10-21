import MobileNav from '@/components/modules/Navigation/Navbar/MobileNav'
import React from 'react'

const layout = ({children} : {children : React.ReactNode}  ) => {
  return (
    <div>
      <MobileNav/>
      <main className='bg-sky-800'>
        {children}
      </main>
    </div>
  )
}

export default layout