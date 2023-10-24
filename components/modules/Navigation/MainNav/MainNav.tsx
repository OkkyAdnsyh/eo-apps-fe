'use client'

import Toggle from '@/components/elements/Button/Toggle'
import React from 'react'
import { usePathname } from 'next/navigation'
import NavLink from '@/components/elements/Nav/NavLink'
import { FaChartPie, FaClipboardList } from 'react-icons/fa6'
import { BiSolidBookContent, BiLogOutCircle } from 'react-icons/bi'
import { FaUsers, FaTicketAlt } from 'react-icons/fa'

const MainNav = () => {
  const currentPath = usePathname()
  return (
    <>
      <aside className='relative flex-grow-0 hover:flex-grow-[1] hidden lg:block transition-all ease-in bg-slate-900 overflow-x-hidden group h-auto'>
        <div className='sticky top-0 h-screen w-full pl-2 py-8 flex flex-col items-center justify-between'>
          <nav className='origin-left scale-x-10 flex flex-col items-start justify-start gap-y-3'>
            <NavLink href={'/Dashboard'} className={`text-md font-medium pr-8 text-gray-50 ${currentPath === '/Dashboard' && 'bg-sky-700 ml-2'} rounded-tl-full rounded-bl-full flex items-center justify-start`}>
              <FaChartPie style={{fontSize : '24px', color : "#ffffff"}}/>
              <p className="hidden group-hover:block">Overview</p>
            </NavLink>
            <NavLink href={'/Dashboard/Events'} className={`text-md font-medium pr-8 text-gray-50 ${currentPath === '/Dashboard/Events' && 'bg-sky-700 ml-2'} rounded-tl-full rounded-bl-full flex items-center justify-start`}>
              <FaClipboardList style={{fontSize : '24px', color : "#ffffff"}}/>
              <p className="hidden group-hover:block">Events</p>
            </NavLink>
            <NavLink href={'/Dashboard/Reports'} className={`text-md font-medium pr-8 text-gray-50 ${currentPath === '/Dashboard/Reports' && 'bg-sky-700 ml-2'} rounded-tl-full rounded-bl-full flex items-center justify-start`}>
              <BiSolidBookContent style={{fontSize : '24px', color : "#ffffff"}}/>
              <p className="hidden group-hover:block">Reports</p>
            </NavLink>
            <NavLink href={'/Dashboard/Teams'} className={`text-md font-medium pr-8 text-gray-50 ${currentPath === '/Dashboard/Teams' && 'bg-sky-700 ml-2'} rounded-tl-full rounded-bl-full flex items-center justify-start`}>
              <FaUsers style={{fontSize : '24px', color : "#ffffff"}}/>
              <p className="hidden group-hover:block">Teams</p>
            </NavLink>
            <NavLink href={'/Dashboard/Tickets'} className={`text-md font-medium pr-8 text-gray-50 ${currentPath === '/Dashboard/Tickets' && 'bg-sky-700 ml-2'} rounded-tl-full rounded-bl-full flex items-center justify-start`}>
              <FaTicketAlt style={{fontSize : '24px', color : "#ffffff"}}/>
              <p className="hidden group-hover:block">Ticket Data</p>
            </NavLink>
          </nav>
          <Toggle className={`font-medium text-gray-50 bg-red-600 hover:bg-red-900 transition-colors ease-in flex items-center justify-start gap-x-4 pl-8 py-4 w-full rounded-tl-full rounded-bl-full`}>
            <BiLogOutCircle style={{fontSize : '24px'}} />
            <p className="hidden group-hover:block">Log Out</p>
          </Toggle>
        </div>
      </aside>
    </>
  )
}

export default MainNav