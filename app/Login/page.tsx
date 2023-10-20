import LinkButton from '@/components/elements/LinkButton/LinkButton'
import LoginForms from '@/components/modules/Forms/LoginForms'
import React from 'react'

const Login = () => {
  return (
    <main className='h-screen flex flex-col items-center justify-center gap-y-4 px-12 py-8 lg:px-24'>
      <LoginForms/>
      <div className=' w-full lg:w-1/3 flex flex-col lg:flex-row items-center justify-around p-6'>
        <div className='flex flex-col items-center justify-center lg:flex-row gap-y-2 lg:gap-x-2 pl-3'>
          <p>Create New Account ?</p>
          <LinkButton href={'/Signup'} className='text-md font-bold text-sky-700'>
            Sign Up          
          </LinkButton> 
        </div>
      </div>
    </main>
  )
}

export default Login