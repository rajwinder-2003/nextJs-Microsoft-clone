/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="hidden lg:flex max-w-full mt-20">
              <div className='bg-[#f2f2f2] w-full px-10'>
                <div className='flex justify-between w-full pr-8 pl-2 mt-5'>
                  <div className="flex-col">
                    <h1 className='mt-6 mx-6 text-base font-semibold text-gray-600'>What`s new</h1>
                    <ul className='space-y-4'>
                    <li></li>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft 365</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Surface Pro X</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Surface Pro 7</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Surface Laptop 3</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600  text-xs font-normal hover:cursor-pointer hover:underline'>Windows 11 apps</li></Link>
                    </ul>
                  </div>
                  <div className="flex-col">
                    <h1 className='mt-6 mx-6 text-base font-semibold text-gray-600'>Microsoft Store</h1>
                    <ul className='space-y-4'>
                    <li></li>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Account profile</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Download Center</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft Store Support</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Returns</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Order tracking</li></Link>
                    </ul>
                  </div>
                  <div className="flex-col">
                    <h1 className='mt-6 mx-6 text-base font-semibold text-gray-600'>Education</h1>
                    <ul className='space-y-4'>
                    <li></li>
                    <Link href="/"><li className='px-6 text-gray-600  text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft in education</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Devices for education</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft Teams for Education</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft 365 Education</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Office Education</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Educator training and development</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Deals for students and parents</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Azure for students</li></Link>
                    </ul>
                  </div>
                  <div className="flex-col">
                    <h1 className='mt-6 mx-6 text-base font-semibold text-gray-600'>Business</h1>
                    <ul className='space-y-4'>
                    <li></li>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft Cloud</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft Security</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Azure</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Dynamics 365</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft 365</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft Advertising</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft Industry</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft Teams</li></Link>
                    </ul>
                  </div>
                  <div className="flex-col">
                    <h1 className='mt-6 mx-6 text-base font-semibold text-gray-600'>Developer & IT</h1>
                    <ul className='space-y-4'>
                    <li></li>
                    <Link href="/"><li className='px-6 text-gray-600  text-xs font-normal hover:cursor-pointer hover:underline'>Developer Center</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Documentation</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft Learn</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft Tech Community</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Azure Marketplace</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>AppSource</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft Power Platform</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Visual Studio</li></Link>
                    </ul>
                  </div>
                  <div className="flex-col">
                    <h1 className='mt-6 mx-6 text-base font-semibold text-gray-600'>Company</h1>
                    <ul className='space-y-4'>
                    <li></li>
                    <Link href="/"><li className='px-6 text-gray-600  text-xs font-normal hover:cursor-pointer hover:underline'>Careers</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>About Microsoft</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Company news</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Privacy at Microsoft</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Investors</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Security</li></Link>
                    <Link href="/"><li className='px-6 text-gray-600 text-xs font-normal hover:cursor-pointer hover:underline'>Sustainability</li></Link>
                    </ul>
                  </div>
                </div>
                  <div className='flex w-full mt-8 mb-20 justify-between px-9'>
                        <div>
                            <ul className='flex'>
                                <Link href='/'>
                                <li className='flex text-xs font-normal hover:cursor-pointer hover:underline text-gray-600 active:outline-dashed active:outline-1 px-2 py-1'>
                                <span><img className='h-5 mr-2' src="glob.png" alt="" /></span>
                                English(India)
                                </li>
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <ul className='flex space-x-6'>
                                <Link href='/'>
                                <li className='text-xs font-normal hover:cursor-pointer hover:underline text-gray-600 active:outline-dashed active:outline-1 px-2 py-1'>Contact Microsoft</li>
                                </Link>
                                <Link href='/'>
                                <li className='text-xs font-normal hover:cursor-pointer hover:underline text-gray-600 active:outline-dashed active:outline-1 px-2 py-1'>Privacy</li>
                                </Link>
                                <Link href='/'>
                                <li className='text-xs font-normal hover:cursor-pointer hover:underline text-gray-600 active:outline-dashed active:outline-1 px-2 py-1'>Terms of use</li>
                                </Link>
                                <Link href='/'>
                                <li className='text-xs font-normal hover:cursor-pointer hover:underline text-gray-600 active:outline-dashed active:outline-1 px-2 py-1'>Trademarks</li>
                                </Link>
                                <Link href='/'>
                                <li className='text-xs font-normal hover:cursor-pointer hover:underline text-gray-600 active:outline-dashed active:outline-1 px-2 py-1'>About our ads</li>
                                </Link>
                                <li className='text-xs font-normal text-gray-600'>© Microsoft 2022</li>
                            </ul>
                        </div>
                  </div>
              </div>
        </div>
  )
}

export default Footer