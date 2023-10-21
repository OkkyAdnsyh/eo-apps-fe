"use client";

import { IUserInfo } from '@/GlobalType/Interfaces/Interfaces';
import Button from '@/components/elements/Button/Button'
import FormControl from '@/components/elements/FormControl/FormControl'
import LinkButton from '@/components/elements/LinkButton/LinkButton'
import TextInput from '@/components/elements/UserInput/TextInput'
import React, { useState, ChangeEvent, FormEvent } from 'react'

const LoginForms = () => {

  // contain user data
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    uname : "",
    pass : ""
  })

  // set user info when input value is change
  const setUname = (e : ChangeEvent<HTMLInputElement>) => {
    setUserInfo({...userInfo, uname : e.target.value})
  }
  const setPass = (e : ChangeEvent<HTMLInputElement>) => {
    setUserInfo({...userInfo, pass : e.target.value})
  }

  // send data on form submit
  const onSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <FormControl className='w-full lg:w-1/3 flex items-center justify-start flex-col bg-gray-900 rounded-lg gap-y-6 p-6 lg:px-12 lg:py-6' onSubmit={onSubmit}>
          <h1 className='font-bold text-2xl text-gray-50'>WELCOME</h1>
          <TextInput label='Username or Email :' inputID='uname' type='text' placeholder='Username or Email' onChange={setUname}/>
          <TextInput label='Password :' inputID='pass' type='password' placeholder='Password' onChange={setPass}/>
          <div className='flex items-center justify-center mt-2'>
              <Button type='submit' className='bg-sky-700 font-bold text-gray-50 rounded-md' name='Login'/>
          </div>
          <LinkButton className='text-lg text-gray-50 mt-4 ml-2 border-b-2 border-b-gray-50' href={'/Login/Scanner'}>Login as Scanner</LinkButton>
      </FormControl>
    </>
  )
}

export default LoginForms