"use client"

import Toggle from '@/components/elements/Button/Toggle'
import React, { MouseEvent, useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Pathname from '@/components/elements/Pathname/Pathname'
import Notification from '@/components/modules/Notification/Notification'
import MobileSidebar from '@/components/modules/Navigation/Sidebar/MobileSidebar'
import { usePathname } from 'next/navigation'

const MobileNavbar = () => {
    const [navIsOpen, setNav] = useState<boolean>(false)
    const currentPath : string = usePathname();

    useEffect(() => {
        setNav(false)
    }, [currentPath])

    const handleNavToggle = (e : MouseEvent<HTMLButtonElement>) => {
        setNav(!navIsOpen)
    }
  return (
    <>
        <header className='sticky bg-gray-50 border-b-2 border-b-gray-400/10 top-0 z-50 w-full px-6 py-3 flex md:hidden items-center justify-between'>
            <Toggle onClick={handleNavToggle}>
                <FaBars style={{fontSize : '24px', color : "#232323"}} />
            </Toggle>
            <Pathname/>
            <Notification />
        </header>
        <MobileSidebar navState={navIsOpen}/>
    </>
  )
}

export default MobileNavbar