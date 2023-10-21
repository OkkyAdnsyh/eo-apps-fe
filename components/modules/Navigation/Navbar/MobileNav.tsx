"use client"

import Toggle from '@/components/elements/Button/Toggle'
import NavLink from '@/components/elements/Nav/NavLink'
import { usePathname } from 'next/navigation'
import React, { MouseEvent, useState, useEffect } from 'react'
import { FaBars, FaChartPie, FaClipboardList } from 'react-icons/fa6'
import { BiSolidBookContent } from 'react-icons/bi'
import { FaUsers, FaTicketAlt } from 'react-icons/fa'

const MobileNav = () => {

    const currentPath = usePathname()
    const [navIsActive, setNavIsActive] = useState<boolean>(false)

    useEffect(() => {
        setNavIsActive(false)
    }, [currentPath])

    const handleNavToggle = (e : MouseEvent<HTMLButtonElement>) => {
        setNavIsActive(!navIsActive)
    }
    

  return (
    <>
        <header className='fixed top-0 w-screen flex items-center justify-between p-4 z-50 lg:hidden'>
            <Toggle onClick={handleNavToggle}>
                <FaBars style={{fontSize : '36px', color : "#ffffff"}} />
            </Toggle>
        </header>
        <aside className={`fixed top-0 w-screen bg-slate-900 z-10 h-screen pl-6 pt-20 flex flex-col gap-y-6 ${navIsActive ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 lg:hidden`}>
            <NavLink href={'/Dashboard'} className={`text-lg font-bold text-gray-50 ${currentPath === '/Dashboard' && 'bg-sky-700'} rounded-tl-md rounded-bl-md`}>
                <FaChartPie style={{fontSize : '28px', color : "#ffffff"}}/>
                Overview
            </NavLink>
            <NavLink href={'/Dashboard/Events'} className={`text-lg font-bold text-gray-50 ${currentPath === '/Dashboard/Events' && 'bg-sky-700'} rounded-tl-md rounded-bl-md`}>
                <FaClipboardList style={{fontSize : '28px', color : "#ffffff"}}/>
                Events
            </NavLink>
            <NavLink href={'/Dashboard/Reports'} className={`text-lg font-bold text-gray-50 ${currentPath === '/Dashboard/Reports' && 'bg-sky-700'} rounded-tl-md rounded-bl-md`}>
                <BiSolidBookContent style={{fontSize : '28px', color : "#ffffff"}}/>
                Reports
            </NavLink>
            <NavLink href={'/Dashboard/Teams'} className={`text-lg font-bold text-gray-50 ${currentPath === '/Dashboard/Teams' && 'bg-sky-700'} rounded-tl-md rounded-bl-md`}>
                <FaUsers style={{fontSize : '28px', color : "#ffffff"}}/>
                Teams
            </NavLink>
            <NavLink href={'/Dashboard/TicketData'} className={`text-lg font-bold text-gray-50 ${currentPath === '/Dashboard/TicketData' && 'bg-sky-700'} rounded-tl-md rounded-bl-md`}>
                <FaTicketAlt style={{fontSize : '28px', color : "#ffffff"}}/>
                Ticket Data
            </NavLink>
        </aside>
    </>
  )
}

export default MobileNav