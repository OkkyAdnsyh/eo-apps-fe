"use client"

import { INotif } from '@/GlobalType/Interfaces/Interfaces'
import Toggle from '@/components/elements/Button/Toggle'
import DropItem from '@/components/elements/Dropdown/DropItem'
import Dropdown from '@/components/elements/Dropdown/Dropdown'
import Link from 'next/link'
import React, { MouseEvent, useState } from 'react'
import { FaBell } from 'react-icons/fa'

const Notification = () => {
    const [notifIsOpen, setNotifIsOpen] = useState<boolean>(false)
    const [notif, setNotif] = useState<INotif[]>([
        {
            id : 1,
            url : '/Dashboard',
            status : false,
            message : 'You have unfinished event set up'
        },
        {
            id : 2,
            url : '/Dashboard',
            status : false,
            message : 'You have unfinished event set up'
        },
        {
            id : 3,
            url : '/Dashboard',
            status : false,
            message : 'You have unfinished event set up'
        }
    ])


    const handleNotifToggle = (e : MouseEvent<HTMLButtonElement>) => {
        setNotifIsOpen(!notifIsOpen)
    }

  return (
    <>
        <Toggle onClick={handleNotifToggle}>
            <FaBell style={{fontSize : '24px', color : "#ffffff"}} />
        </Toggle>
        <Dropdown className={`translate-y-[75%] -translate-x-[90%] w-72 h-auto max-h-40 ${notifIsOpen ? 'scale-y-full' : 'scale-y-0'} origin-top transition-transform duration-500 rounded-xl shadow-md`}>
            {notif.map((item) => {
                return (
                    <li key={item.id}>
                        <DropItem className='w-full h-20 block'>
                            <Link href={item.url} className={`flex items-center justify-start p-3 text-md font-semibold text-gray-100 w-full h-full ${item.status ? 'bg-gray-50' : 'bg-gray-200/60'} border-b-2 border-b-sky-500/30`} onClick={(e : MouseEvent<HTMLAnchorElement>) => {
                                setNotif((prevState : INotif[]) : INotif[] => {
                                    return prevState.map((notif : INotif) : INotif => {
                                        if(notif.id === item.id){
                                            return {...notif, status : true}
                                        } else return notif
                                    })
                                })
                            }}>
                                {item.message}
                            </Link>
                        </DropItem>
                    </li>
                )
            })}
        </Dropdown>
    </>
  )
}

export default Notification