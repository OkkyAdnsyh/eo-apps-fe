"use client"

import { INotif } from '@/GlobalType/Interfaces/Interfaces'
import Toggle from '@/components/elements/Button/Toggle'
import DropItem from '@/components/elements/Dropdown/DropItem'
import Dropdown from '@/components/elements/Dropdown/Dropdown'
import Link from 'next/link'
import React, { MouseEvent, useEffect, useState } from 'react'
import { FaBell } from 'react-icons/fa'

const Notification = () => {
    const [notifIsOpen, setNotifIsOpen] = useState<boolean>(false)
    const [notif, setNotif] = useState<INotif[]>([
        {
            id : 1,
            url : '/Dashboard',
            status : false,
            message : 'You have unfinished event set up, click here to view'
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
    const [statusHasValue, setStatusHasValue] = useState<boolean>(false)

    useEffect(() => {
        handleNotifStatus();
    }, [notif])

    const handleNotifToggle = (e : MouseEvent<HTMLButtonElement>) => {
        setNotifIsOpen(!notifIsOpen)
    }

    const objectHasValue = (obj : Object, value : boolean) => {
        let hasValue : boolean = Object.values(obj).includes(value)
        return hasValue
    }

    const handleNotifStatus = () => {
        let notifStatus : boolean[] = []
        let status : boolean;
        notif.map(item => {
           const status = objectHasValue(item, false)
           notifStatus.push(status)
        })

        status = notifStatus.includes(true)
        {status ? setStatusHasValue(true) : setStatusHasValue(false)    }
    }

  return (
    <>
        <Toggle onClick={handleNotifToggle} className={`${statusHasValue ? 'before:block before:w-2 before:h-2 before:bg-red-700 before:rounded-full' : ''}`}>
            <FaBell style={{fontSize : '24px', color : "#0f172a"}} />
        </Toggle>
        <Dropdown className={`translate-y-[75%] lg:translate-y-[30%] -translate-x-[90%] w-72 lg:w-96 h-auto max-h-40 ${notifIsOpen ? 'scale-y-full' : 'scale-y-0'} origin-top transition-transform duration-500 rounded-xl shadow-lg`}>
            {notif.map((item) => {
                return (
                    <li key={item.id}>
                        <DropItem className='w-full h-20 block'>
                            <Link href={item.url} className={`flex items-center justify-start p-3 text-md lg:text-sm font-semibold w-full h-full ${item.status ? 'bg-gray-50 text-gray-500' : 'bg-sky-600/60 text-gray-100'} border-b-2 border-b-sky-500/30`} onClick={(e : MouseEvent<HTMLAnchorElement>) => {
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