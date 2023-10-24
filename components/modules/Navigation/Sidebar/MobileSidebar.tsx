"use client"

import React from 'react'
import {FaChartPie, FaClipboardList } from 'react-icons/fa6'
import { BiSolidBookContent, BiLogOutCircle } from 'react-icons/bi'
import { FaUsers, FaTicketAlt, FaUserEdit, FaUserLock } from 'react-icons/fa'
import NavLink from '@/components/elements/Nav/NavLink'
import { usePathname } from 'next/navigation'
import Toggle from '@/components/elements/Button/Toggle'

const MobileSidebar = ({navState} : {navState : boolean}) => {
    const currentPath : string = usePathname()

  return (
    <nav className={`fixed top-0 w-screen h-screen bg-slate-950 flex md:hidden flex-col items-start justify-between pt-24 px-5 pb-24 ${navState === true ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-linear`}>
        <div className='w-full flex flex-col items-start justify-start gap-y-2'>
            <NavLink href={'/Dashboard'} className={`text-md p-4 w-full font-bold  ${currentPath === '/Dashboard' ? 'bg-sky-700/40 text-gray-50' : 'text-gray-400'} rounded-md`}>
                    <FaChartPie style={{fontSize : '24px', color : `${currentPath === '/Dashboard' ? "#ffffff" : "#9ca3af"}`}}/>
                    Overview
            </NavLink>
            <NavLink href={'/Dashboard/Events'} className={`text-md p-4 w-full font-bold  ${currentPath === '/Dashboard/Events' ? 'bg-sky-700/40 text-gray-50' : 'text-gray-400'} rounded-md`}>
                    <FaClipboardList style={{fontSize : '24px', color :`${currentPath === '/Dashboard/Events' ? "#ffffff" : "#9ca3af"}`}}/>
                    Events
            </NavLink>
            <NavLink href={'/Dashboard/Reports'} className={`text-md p-4 w-full font-bold  ${currentPath === '/Dashboard/Reports' ? 'bg-sky-700/40 text-gray-50' : 'text-gray-400'} rounded-md`}>
                    <BiSolidBookContent style={{fontSize : '24px', color :`${currentPath === '/Dashboard/Reports' ? "#ffffff" : "#9ca3af"}`}}/>
                    Reports
            </NavLink>
            <NavLink href={'/Dashboard/Teams'} className={`text-md p-4 w-full font-bold  ${currentPath === '/Dashboard/Teams' ? 'bg-sky-700/40 text-gray-50' : 'text-gray-400'} rounded-md`}>
                    <FaUsers style={{fontSize : '24px', color :`${currentPath === '/Dashboard/Teams' ? "#ffffff" : "#9ca3af"}`}}/>
                    Teams
            </NavLink>
            <NavLink href={'/Dashboard/Tickets'} className={`text-md p-4 w-full font-bold  ${currentPath === '/Dashboard/Tickets' ? 'bg-sky-700/40 text-gray-50' : 'text-gray-400'} rounded-md`}>
                    <FaTicketAlt style={{fontSize : '24px', color :`${currentPath === '/Dashboard/Tickets' ? "#ffffff" : "#9ca3af"}`}}/>
                    Ticket Data
            </NavLink>
        </div>
        <div className='w-full flex flex-col items-start justify-start gap-y-2'>
            <NavLink href={'/Dashboard/Setting'} className={`text-md p-4 w-full font-bold  ${currentPath === '/Dashboard/Setting' ? 'bg-sky-700/40 text-gray-50' : 'text-gray-400'} rounded-md`}>
                    <FaUserEdit style={{fontSize : '24px', color :`${currentPath === '/Dashboard/Setting' ? "#ffffff" : "#9ca3af"}`}}/>
                    Setting
            </NavLink>
            <Toggle className={`text-md font-bold text-gray-50 bg-red-600 flex items-center justify-start gap-x-4 p-4 w-full rounded-md`}>
                <BiLogOutCircle style={{fontSize : '28px', color : "#ffffff"}}/>
                Log Out
            </Toggle>
        </div>
    </nav>
  )
}

export default MobileSidebar