import Image from 'next/image'
import Bg from '@/public/img/login-bg.webp'
import LinkButton from '@/components/elements/LinkButton/LinkButton'
import { BsArrowBarRight } from 'react-icons/bs'

export default function Home() {
  return (
    <main className="flex min-h-screen relative">
      <section className={`w-screen h-full absolute flex items-center justify-center`}>
        <Image
          src={Bg}
          alt='background image'
          className='w-full h-full object-cover'
        />
      </section>
      <section className={`w-screen h-full absolute flex flex-col items-start lg:items-center justify-center gap-y-6   lg:gap-y-6 px-12 py-8 bg-white-grad`}>
        <h1 className={`font-bold text-3xl lg:text-6xl text-gray-100`}>
          EVENT ORGANIZER APPS
        </h1>
        <h2 className={`font-medium text-md lg:text-xl text-gray-50 capitalize`}>
          start organizing your operations through <span className='font-bold'>one</span> app
        </h2>
        <LinkButton href={'/Dashboard'} className={`bg-sky-700 text-md font-bold text-sky-50 pl-8 pr-6 py-4 rounded flex items-center justify-start gap-x-4`}>
          Try Demo Account
          <BsArrowBarRight style={{fontSize : '20px'}} />
        </LinkButton>
        <h3 className={`font-medium text-md lg:text-xl text-gray-50 capitalize`}>
          or use your own trial account to test out our application
        </h3>
        <LinkButton href={'/Login'} className={`text-lg font-bold text-sky-50 px-12 py-2 border-b-2 border-b-gray-50`}>
          Login
        </LinkButton>
      </section>
    </main>
  )
}
