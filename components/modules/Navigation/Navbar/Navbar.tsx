import Pathname from '@/components/elements/Pathname/Pathname'
import React from 'react'
import Notification from '@/components/modules/Notification/Notification'
import NavLink from '@/components/elements/Nav/NavLink'
import { FaUserEdit } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='pb-2 w-full hidden md:flex items-center justify-between'>
        <Pathname/>
        <div className='flex gap-x-4'>
            <Notification />
            <NavLink href={'/Dashboard/Setting'} className={`text-md p-4 w-full font-bold rounded-md`}>
                    <FaUserEdit style={{fontSize : '24px', color :"#232323"}}/>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar