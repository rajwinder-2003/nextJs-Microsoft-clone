/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [search, setSearch] = useState(false)
  const [lSearch, setLSearch] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const BackButton = () => {
    setSearch(search == false)
  }

  const CancelButton = () => {
    setLSearch(lSearch == false)
  }

  return (
    <div className=''>
      {/* for large screen */}
        <nav className={lSearch ? "hidden" : "hidden lg:flex justify-between py-1 my-2 px-20"}>
          <div className='flex'>
          <img className='h-6 hover:cursor-pointer mt-1' src="/logo.png" alt="" />
          <ul className='flex space-x-5 justify-items-center mx-8 mt-1'>
            <Link href= "/"><li className='font-light text-sm hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-4'>Microsoft 365</li></Link>
            <Link href="/"><li className='font-light text-sm hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-4'>Teams</li></Link>
            <Link href="/"><li className='font-light text-sm hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-4'>Windows</li></Link>
            <Link href="/"><li className='font-light text-sm hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-4'>Surface</li></Link>
            <Link href="/"><li className='font-light text-sm hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-4'>Xbox</li></Link>
            <Link href="/"><li className='font-light text-sm hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-4'>Support</li></Link>
          </ul>
          </div>  
          <div className='flex space-x-4 space-y- justify-end'>
            <button onClick={() => setShowDropdown(!showDropdown)} className='flex text-sm font-normal hover:cursor-pointer hover:underline decoration-2 hover:underline-offset-4 px-3'>
              All Microsoft
              <img className='h-3 mx-1 my-2' src="down.png" alt="" />
            </button>
            <button onClick={() => setLSearch(!lSearch)}>
            <img className='h-5 mx-2 hover:cursor-pointer' src="search.png" alt="" />
            </button>
            <button>
            <img className='h-7 hover:cursor-pointer' src="cart.png" alt="" />
            </button>
            <Link href='/signin'>
            <button>
            <img className='h-7 hover:cursor-pointer' src="add.png" alt="" />
            </button>
            </Link>
          </div>
        </nav>




          {/* large device search bar */}
          <div className={lSearch ? "hidden lg:flex justify-between my-2 px-20" : "hidden"}>
                <img className='h-6 mt-2 hover:cursor-pointer' src="/logo.png" alt="" />
                <input className='w-full h-9 ml-10 outline-none border-2 border-blue-800 text-sm font-thin pl-2' type="search" placeholder='Search Microsoft.com'/>
                <button onClick={CancelButton} className='border-[1px] border-black mx-2 py-1 px-5 text-sm'>
                  Cancel
                </button>
          </div>



          {/* drop down menu for large device */}

          <div className={showDropdown ? "hidden lg:flex mx-20 absolute max-w-full" : "hidden"}>
              <div className='bg-[#f2f2f2] w-full'>
                <div className='flex justify-between w-full pr-8 pl-2'>
                  <div className="flex-col">
                    <h1 className='mt-6 mx-6 text-sm font-medium'>Software</h1>
                    <ul>
                    <li></li>
                    <Link href="/"><li className='py-3 px-6 mt-6 text-xs font-normal hover:cursor-pointer hover:underline'>Windows Apps</li></Link>
                    <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>OneDrive</li></Link>
                    <Link href="/"><li className='py-4 px-6  text-xs font-normal hover:cursor-pointer hover:underline'>Outlook</li></Link>
                    <Link href="/"><li className='py-4 px-6  text-xs font-normal hover:cursor-pointer hover:underline'>Skype</li></Link>
                    <Link href="/"><li className='py-4 px-6  text-xs font-normal hover:cursor-pointer hover:underline'>OneNote</li></Link>
                    <Link href="/"><li className='py-4 px-6  text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft Teams</li></Link>
                    </ul>
                  </div>
                  <div className="flex-col">
                    <h1 className='mt-6 mx-6 text-sm font-medium'>PCs & Devices</h1>
                    <ul>
                      <li></li>
                      <Link href="/"><li className='py-3 px-6 mt-6 text-xs font-normal hover:cursor-pointer hover:underline'>Shop Xbox</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Accessories</li></Link>
                    </ul>
                  </div>
                  <div className="flex-col">
                    <h1 className='mt-6 mx-6 text-sm font-medium'>Entertainment</h1>
                    <ul>
                      <li></li>
                      <Link href="/"><li className='py-3 px-6 mt-6 text-xs font-normal hover:cursor-pointer hover:underline'>Xbox Game Pass Ultimate</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Xbox Live Gold</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Xbox games</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>PC games</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Windows digital games</li></Link>
                    </ul>
                  </div>
                  <div className="flex-col">
                    <h1 className='mt-6 mx-6 text-sm font-medium'>Business</h1>
                    <ul>
                      <li></li>
                      <Link href="/"><li className='py-3 px-6 mt-6 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft Cloud</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft Security</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Azure</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Dynamics 365</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft 365 for business</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft Industry</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft Power Platform</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Windows 365</li></Link>
                    </ul>
                  </div>
                  <div className="flex-col">
                    <h1 className='mt-6 mx-6 text-sm font-medium'>Developer & IT</h1>
                    <ul>
                      <li></li>
                      <Link href="/"><li className='py-3 px-6 mt-6 text-xs font-normal hover:cursor-pointer hover:underline'>Developer Center</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Documentation</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft Learn</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Microsoft Tech Community</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Azure Marketplace</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>AppSource</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Visual Studio</li></Link>
                    </ul>
                  </div>
                  <div className="flex-col">
                    <h1 className='mt-6 mx-6 text-sm font-medium'>Other</h1>
                    <ul>
                      <li></li>
                      <Link href="/"><li className='py-3 px-6 mt-6 text-xs font-normal hover:cursor-pointer hover:underline'>Free downloads & security</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Education</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Gift Cards</li></Link>
                      <Link href="/"><li className='py-4 px-6 text-xs font-normal hover:cursor-pointer hover:underline'>Licensing</li></Link>
                    </ul>
                  </div>
                </div>
                  <div className='flex w-full bg-[#e6e6e6] justify-center border-b-2 border-black'>
                        <ul className=''>
                          <li className='text-sm font-thin py-2 hover:underline hover:cursor-pointer'>VIEW SITEMAP</li>
                        </ul>
                  </div>
              </div>
        </div>





          {/* for mobile Navbar */}
        <nav className={search ? "hidden" : "lg:hidden flex justify-between py-2 my-3 px-5"}>
              <div className='flex space-x-6'>
                <button onClick={() => setShow(!show)}>
                  {show ? (
                      <img className='h-5 w-4' src="close.png" alt="" />
                  ) : (
                    <img className='h-5 w-6' src="menu.png" alt="" />
                  )}
                </button>
                <div>
                  <button onClick={() => setSearch(!search)}>
                  <img src="search.png" alt="" />
                  </button>
                </div>
              </div>
              <div className=''>
                <img className='h-6 w-28' src="logo.png" alt="" />
              </div>
              <div className='flex space-x-6 justify-items-end'>
                  <button>
                    <img className='h-6' src="cart.png" alt="" />
                  </button>
                  <button>
                    <img className='h-6' src="add.png" alt="" />
                  </button>
              </div>
        </nav>


        {/* for mobile searchbar */}
        <div className={search ? "flex py-2 px-3 space-x-4" : "hidden"}>
            <button onClick={BackButton}>
              <img className='h-6' src="back.png" alt="" />
            </button>
            <div className=' flex border-2 h-9 border-blue-500 w-full space-x-4'>
              <span className='justify-center'><img className='h-5 mx-1 my-1' src="search.png" alt="" /></span>
              <input className='w-full focus:outline-none font-thin' type="search" placeholder='Search Microsoft.com' />
            </div>
        </div>


        {/* for mobile navi */}
        <div className={show ? "bg-[#f2f2f2]" : "hidden"}>
            <ul className='flex-col'>
              <li></li>
              <Link href="/"><li className='py-4 px-4 border-b-2 text-sm'>Microsoft 365</li></Link>
              <Link href="/"><li className='py-4 px-4 border-b-2 text-sm'>Teams</li></Link>
              <Link href="/"><li className='py-4 px-4 border-b-2 text-sm'>Windows</li></Link>
              <Link href="/"><li className='py-4 px-4 border-b-2 text-sm'>Surface</li></Link>
              <Link href="/"><li className='py-4 px-4 border-b-2 text-sm'>Xbox</li></Link>
              <Link href="/"><li className='py-4 px-4 border-b-2 text-sm'>Support</li></Link>
              <Link href="/"><li className='py-4 px-4 border-b-2 text-sm'>Software</li></Link>
              <Link href="/"><li className='py-4 px-4 border-b-2 text-sm'>PCs & Devices</li></Link>
              <Link href="/"><li className='py-4 px-4 border-b-2 text-sm'>Entertainment</li></Link>
              <Link href="/"><li className='py-4 px-4 border-b-2 text-sm'>Business</li></Link>
              <Link href="/"><li className='py-4 px-4 border-b-2 text-sm'>Developer & IT</li></Link>
              <Link href="/"><li className='py-4 px-4 border-b-2 text-sm'>Other</li></Link>
              <Link href="/"><li className='py-4 px-4 border-b-2 text-sm'>View Sitemap</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar