import React from 'react'
import MobileNavbar from '@/components/modules/Navigation/Navbar/MobileNavbar'
import Sidebar from '@/components/modules/Navigation/Sidebar/Sidebar'
import Navbar from '@/components/modules/Navigation/Navbar/Navbar'

const layout = ({children} : {children : React.ReactNode}  ) => {
  return (
    <div className='flex flex-col md:flex-row h-auto'>
      <MobileNavbar />
      <Sidebar />
      <main className='bg-sky-300/15 flex-grow-[100] px-6 py-4'>
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default layout