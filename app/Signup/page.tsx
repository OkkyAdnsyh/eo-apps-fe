
import SignupForms from '@/components/modules/Forms/SignupForms'
import React from 'react'

const Signup = () => {
  

  return (
    <>
      <main className='h-screen flex flex-col items-center justify-center gap-y-4 px-6 py-8 lg:px-24'>
        <SignupForms/>
      </main>
    </>
  )
}

export default Signup