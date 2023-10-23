"use client"

import Toggle from '@/components/elements/Button/Toggle'
import NavLink from '@/components/elements/Nav/NavLink'
import { usePathname } from 'next/navigation'
import React, { MouseEvent, useState, useEffect } from 'react'
import { FaBars, FaChartPie, FaClipboardList } from 'react-icons/fa6'
import { BiSolidBookContent, BiLogOutCircle } from 'react-icons/bi'
import { FaUsers, FaTicketAlt, FaUserEdit, FaUserLock } from 'react-icons/fa'
import { BsPersonFillGear } from 'react-icons/bs'
import Notification from '@/components/modules/Notification/Notification'

const MobileNav = () => {

    const currentPath = usePathname()
    const [navIsActive, setNavIsActive] = useState<boolean>(false)
    const [settingIsActive, setSettingIsActive] = useState<boolean>(false)

    useEffect(() => {
        setNavIsActive(false)
    }, [currentPath])

    const handleNavToggle = (e : MouseEvent<HTMLButtonElement>) => {
        setNavIsActive(!navIsActive)
    }
    const handleSettingToggle = (e : MouseEvent<HTMLButtonElement>) => {
        setSettingIsActive(!settingIsActive)
    }

    

  return (
    <>
        <header className='fixed top-0 w-screen flex items-center justify-between p-4 z-50 lg:hidden'>
            <Toggle onClick={handleNavToggle}>
                <FaBars style={{fontSize : '28px', color : `${navIsActive || settingIsActive ? "#ffffff" : "#232323"}`}} />
            </Toggle>
            <div className='relative flex items-center justify-between gap-x-2 h-full'>
                <Notification/>
                <Toggle onClick={handleSettingToggle}>
                    <BsPersonFillGear style={{fontSize : '28px', color : `${navIsActive || settingIsActive ? "#ffffff" : "#232323"}`}} />
                </Toggle>
            </div>
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
        <aside className={`fixed top-0 w-screen bg-slate-900 z-10 h-screen pl-6 py-20 flex flex-col gap-y-6 transition-transform duration-500 lg:hidden ${settingIsActive ? 'translate-x-0' : 'translate-x-full'}`}>
            <NavLink href={'/Dashboard/Settings/Personal'} className={`text-lg font-bold text-gray-50 ${currentPath === '/Dashboard/Settings/Personal' && 'bg-sky-700'} rounded-tl-md rounded-bl-md`}>
                <FaUserEdit style={{fontSize : '28px', color : "#ffffff"}}/>
                Personal Account
            </NavLink>
            <NavLink href={'/Dashboard/Settings/Access'} className={`text-lg font-bold text-gray-50 ${currentPath === '/Dashboard/Settings/Access' && 'bg-sky-700'} rounded-tl-md rounded-bl-md`}>
                <FaUserLock style={{fontSize : '28px', color : "#ffffff"}}/>
                Manage Access
            </NavLink>
            <Toggle className={`text-lg font-bold text-gray-50 bg-red-600 flex items-center justify-start gap-x-4 pl-8 py-4 w-full rounded-tl-md rounded-bl-md mt-auto`}>
                <BiLogOutCircle style={{fontSize : '28px', color : "#ffffff"}}/>
                Log Out
            </Toggle>
        </aside>
    </>
  )
}

export default MobileNav