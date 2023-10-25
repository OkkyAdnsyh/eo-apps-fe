import Card from '@/components/elements/Card/Card'
import React from 'react'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { BsFillArrowUpRightCircleFill, BsFillTicketPerforatedFill, BsFillArrowDownLeftCircleFill } from 'react-icons/bs'
import { FaMoneyBill1Wave } from 'react-icons/fa6'
import { TbTicketOff } from 'react-icons/tb'
import CardContent from '@/components/elements/Card/CardContent'
import CardFooter from '@/components/elements/Card/CardFooter'
import CardTitle from '@/components/elements/Card/CardTitle'

const Insight = () => {
  return (
    <>
      <section className='w-full grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 gap-y-4 md:gap-y-0 md:gap-x-4'>
        <Card className={`flex flex-col gap-y-4 justify-between bg-sky-400/50`}>
          <CardTitle>
            <FaMoneyCheckAlt style={{fontSize : '28px', color : '#232323'}} />
            <p className='text-sm font-bold text-black'>Total Sales</p>
          </CardTitle>
          <CardContent>
            <p className='text-xl font-medium text-gray-800'>$270,890.89</p>
          </CardContent>
          <CardFooter>
            <article className='flex items-center gap-x-2'>
              <BsFillArrowUpRightCircleFill style={{fontSize : '18px', color : '#02fa02'}} />
              <p className='font-light text-xs text-green-600'>2.5% Increase since last event</p>
            </article>
          </CardFooter>
        </Card>
        <Card className={`flex flex-col gap-y-4 justify-between bg-gray-50 border-2 border-sky-400/50`}>
          <CardTitle>
            <BsFillTicketPerforatedFill style={{fontSize : '28px', color : '#232323'}} />
            <p className='text-sm font-bold text-black'>Total Ticket Sold</p>
          </CardTitle>
          <CardContent>
            <p className='text-xl font-medium text-gray-800'>507 tickets</p>
          </CardContent>
          <CardFooter>
            <article className='flex items-center gap-x-2'>
              <BsFillArrowUpRightCircleFill style={{fontSize : '18px', color : '#02fa02'}} />
              <p className='font-light text-xs text-green-600'>2.5% Increase since last event</p>
            </article>
          </CardFooter>
        </Card>
        <Card className={`flex flex-col gap-y-4 justify-between bg-gray-50 border-2 border-sky-400/50`}>
          <CardTitle>
            <article className='flex flex-col gap-y-2'> 
              <p className='text-xs font-thin text-gray-400'>Latest Event</p>
              <div className='flex gap-x-2 items-center'>
                <FaMoneyBill1Wave style={{fontSize : '28px', color : '#232323'}} />
                <p className='text-sm font-bold text-black'>Revenue</p>
              </div>
            </article>
          </CardTitle>
          <CardContent>
            <p className='text-xl font-medium text-gray-800'>$15,278.89</p>
          </CardContent>
          <CardFooter>
            <article className='flex items-center gap-x-2'>
              <BsFillArrowDownLeftCircleFill style={{fontSize : '18px', color : '#dc2626'}} />
              <p className='font-light text-xs text-red-600'>2.5% Decrease since last event</p>
            </article>
          </CardFooter>
        </Card>
        <Card className={`flex flex-col gap-y-4 justify-between bg-gray-50 border-2 border-sky-400/50`}>
          <CardTitle>
            <article className='flex flex-col gap-y-2'> 
              <p className='text-xs font-thin text-gray-400'>Latest Event</p>
              <div className='flex gap-x-2 items-center'>
                <TbTicketOff style={{fontSize : '28px', color : '#232323'}} />
                <p className='text-sm font-bold text-black'>Unsold Ticket</p>
              </div>
            </article>
          </CardTitle>
          <CardContent>
            <p className='text-xl font-medium text-gray-800'>250 tickets</p>
          </CardContent>
          <CardFooter>
            <article className='flex items-center gap-x-2'>
              <BsFillArrowDownLeftCircleFill style={{fontSize : '18px', color : '#dc2626'}} />
              <p className='font-light text-xs text-red-600'>2.5% Decrease since last event</p>
            </article>
          </CardFooter>
        </Card>
      </section>

    </>
  )
}

export default Insight