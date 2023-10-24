"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import {FaChartPie, FaClipboardList } from 'react-icons/fa6'
import { BiSolidBookContent, BiLogOutCircle } from 'react-icons/bi'
import { FaUsers, FaTicketAlt, FaUserEdit, FaUserLock } from 'react-icons/fa'
import NavLink from '@/components/elements/Nav/NavLink'
import Toggle from '@/components/elements/Button/Toggle'

const Sidebar = () => {
    const currentPath : string = usePathname();

  return (
    <nav className={`hidden md:flex flex-col items-start justify-between bg-gray-50 border-r-2 border-r-gray-400/20 flex-grow-0 overflow-hidden px-6 py-8 h-screen sticky top-0 left-0`}>
        <div className='w-full md:max-w-44 flex flex-col items-start justify-start gap-y-2'>
            <NavLink href={'/Dashboard'} className={`text-sm py-4 pl-4 pr-8 w-full font-bold  ${currentPath === '/Dashboard' ? 'bg-sky-700 text-gray-50' : 'text-gray-400'} rounded-md`}>
                    <FaChartPie style={{fontSize : '20px', color : `${currentPath === '/Dashboard' ? "#ffffff" : "#9ca3af"}`}}/>
                    Overview
            </NavLink>
            <NavLink href={'/Dashboard/Events'} className={`text-sm py-4 pl-4 pr-8 w-full font-bold  ${currentPath === '/Dashboard/Events' ? 'bg-sky-700 text-gray-50' : 'text-gray-400'} rounded-md`}>
                    <FaClipboardList style={{fontSize : '20px', color :`${currentPath === '/Dashboard/Events' ? "#ffffff" : "#9ca3af"}`}}/>
                    Events
            </NavLink>
            <NavLink href={'/Dashboard/Reports'} className={`text-sm py-4 pl-4 pr-8 w-full font-bold  ${currentPath === '/Dashboard/Reports' ? 'bg-sky-700 text-gray-50' : 'text-gray-400'} rounded-md`}>
                    <BiSolidBookContent style={{fontSize : '20px', color :`${currentPath === '/Dashboard/Reports' ? "#ffffff" : "#9ca3af"}`}}/>
                    Reports
            </NavLink>
            <NavLink href={'/Dashboard/Teams'} className={`text-sm py-4 pl-4 pr-8 w-full font-bold  ${currentPath === '/Dashboard/Teams' ? 'bg-sky-700 text-gray-50' : 'text-gray-400'} rounded-md`}>
                    <FaUsers style={{fontSize : '20px', color :`${currentPath === '/Dashboard/Teams' ? "#ffffff" : "#9ca3af"}`}}/>
                    Teams
            </NavLink>
            <NavLink href={'/Dashboard/Tickets'} className={`text-sm py-4 pl-4 pr-8 w-full font-bold  ${currentPath === '/Dashboard/Tickets' ? 'bg-sky-700 text-gray-50' : 'text-gray-400'} rounded-md`}>
                    <FaTicketAlt style={{fontSize : '20px', color :`${currentPath === '/Dashboard/Tickets' ? "#ffffff" : "#9ca3af"}`}}/>
                    Ticket Data
            </NavLink>
        </div>
        <Toggle className={`text-sm font-bold text-gray-50 bg-red-600 flex items-center justify-start gap-x-4 py-4 pl-4 pr-8 w-full rounded-md`}>
                <BiLogOutCircle style={{fontSize : '20px', color : "#ffffff"}}/>
                Log Out
        </Toggle>
    </nav>
  )
}

export default Sidebar