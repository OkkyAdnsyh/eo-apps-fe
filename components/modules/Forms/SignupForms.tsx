"use client"

import Button from '@/components/elements/Button/Button'
import FormControl from '@/components/elements/FormControl/FormControl'
import TextInput from '@/components/elements/UserInput/TextInput'
import { IUserRegisterData } from '@/GlobalType/Interfaces/Interfaces'
import React, {ChangeEvent, FormEvent, useState} from 'react'

const SignupForms = () => {

 // state to contain user data and handle password confirmation
  const [registerData, setRegisterData] = useState<IUserRegisterData>({
    username : "",
    email : "",
    password : ""
  })

  const [passConfirm, setPassConfirm] = useState<Boolean>(false)

  // function to handle form event
  const onSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const setUsername = (e : ChangeEvent<HTMLInputElement>) => {
    setRegisterData({...registerData, username : e.target.value})
  };

  const setEmail = (e : ChangeEvent<HTMLInputElement>) => {
    setRegisterData({...registerData, email : e.target.value})
  };

  const setPassword = (e : ChangeEvent<HTMLInputElement>) => {
    setRegisterData({...registerData, password : e.target.value})
  };

  const handlePassConfirm = (e : ChangeEvent<HTMLInputElement>) => {
    // check if confirmation pass same with password on register data
    {e.target.value !== registerData.password ? setPassConfirm(true) : setPassConfirm(false)}
  };

  return (
    <>
        <FormControl className='w-full lg:w-1/3 flex items-center justify-start flex-col bg-gray-900 rounded-lg gap-y-6 p-6 lg:px-12 lg:py-6' onSubmit={onSubmit}>
            <h1 className='font-bold text-2xl text-gray-50'>
                Sign Up Now
            </h1>
            <h2 className='font-thin text-md text-gray-200 text-center'>
                Try out with your own way
            </h2>
            <TextInput label='Username :' inputID='username' placeholder='Unique Username' type='text' required onChange={setUsername}/>
            <TextInput label='Email :' inputID='email' placeholder='Email' type='email' required onChange={setEmail}/>
            <TextInput label='Password :' inputID='pass' placeholder='Password' type='password' required onChange={setPassword}/>
            <TextInput label='Confirm Password :' inputID='passConfrim' placeholder='Confirm Your Password' type='password' required onChange={handlePassConfirm} className={`${passConfirm && 'border-2 border-red-700'}`}/>
            <div className='flex w-full items-center justify-between mt-4'>
                <Button name='Register' type='submit' className='text-md font-bold text-gray-50 bg-sky-700 rounded-md'/>
                <Button name='Cancel' type='reset' className='text-md font-md text-red-700 border-b-2 border-red-700'/>
            </div> 
        </FormControl>
    </>
  )
}

export default SignupForms