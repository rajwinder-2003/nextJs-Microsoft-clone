/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <div className='mt-[20rem] px-20'>
    <div className='justify-between flex mx-[10rem] '>
        <div className=''>
            <img className='mx-[4.5rem]' src="windowIcon.webp" alt="" />
            <ul>
            <Link href='/'>
            <li className='text-center text-blue-700 text-base font-semibold underline hover:cursor-pointer'>Choose your Microsoft 365</li>
            </Link>
            </ul>
        </div>
        <div>
            <img className='mx-[4.5rem]' src="deviceIcon.webp" alt="" />
            <ul>
            <Link href='/'>
            <li className='text-center text-blue-700 text-base font-semibold underline hover:cursor-pointer'>Explore Surface devices</li>
            </Link>
            </ul>
        </div>
        <div>
            <img className='mx-[4.5rem]' src="xboxIcon.webp" alt="" />
            <ul>
            <Link href='/'>
            <li className='text-center text-blue-700 text-base font-semibold underline hover:cursor-pointer'>Buy Xbox games</li>
            </Link>
            </ul>
        </div>
        <div>
            <img className='mx-[4.5rem]' src="windowIcon.webp" alt="" />
            <ul>
            <Link href='/'>
            <li className='text-center text-blue-700 text-base font-semibold underline hover:cursor-pointer'>Get Windows 11</li>
            </Link>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Services