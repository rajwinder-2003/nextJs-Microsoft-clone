/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Grid2 = () => {

    const data = [
        {
            "img":"g2Img1.webp", "title":"Surface Laptop Go 2 for Business", "desc":" A sleek, portable laptop featuring a great typing experience, Windows 11 Pro and professional-grade performance.", "li":"Learn more", "btn":"New", "id":"1"
        },
        {
            "img":"g2Img2.webp", "title":"Get Microsoft Teams for free", "desc":" Online meetings, chat and shared cloud storage – all in one place.", "li":"Sign up for free", "id":"2"
        },
        {
            "img":"g2Img3.webp", "title":"Microsoft 365 for business", "desc":"Stay a step ahead with powerful apps for productivity, connection and security.", "li":"Shop now", "id":"3"
        },
        {
            "img":"g2Img4.jpg", "title":"Windows 11 for business is here", "desc":"Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.", "li":"Learn more", "id":"4"
        },
    ]

  return (
    <div className='px-20 mt-[5rem]'>
    <h1 className='text-3xl font-semibold'>For business</h1>
    <div className='flex space-x-6 mt-3'>
        {data.map((item) =>(
        <div className='w-1/2' key={item.id}>
            <div className=''>
                <img className='' src={item.img} alt="" />
            </div>
            <div className=''>
                <button className='bg-[#ffb900] text-base font-semibold px-4 py-1 mt-4'>New</button>
                <h1 className='text-2xl font-semibold mt-1'>{item.title}</h1>
                <p className='text-base tracking-normal mt-5'>{item.desc}</p>
                <div className='mt-7'>
                    <ul className='flex hover:space-x-2 hover:cursor-pointer'>
                        <li className='text-blue-800 font-semibold hover:underline'>{item.li}</li>
                        <span><img className='h-5 my-1' src="right.png" alt="" /></span>
                    </ul>
                </div>
            </div>
        </div>
        ))}
    </div>
    <div className='flex space-x-4 mt-14'>
        <div>
            <h1 className='my-1'>Follow Microsoft</h1>
        </div>
        <div className='space-x-4'>
            <button className='hover:cursor-pointer focus:outline-dashed focus:outline-[3px] focus:outline-blue-800'>
                <img className='h-8' src="fb.avif" alt="" />
            </button>
            <button className='hover:cursor-pointer focus:outline-dashed focus:outline-[3px] focus:outline-blue-800'>
                <img className='h-8' src="tw.webp" alt="" />
            </button>
            <button className='hover:cursor-pointer focus:outline-dashed focus:outline-[3px] focus:outline-blue-800'k>
                <img className='h-8' src="yt.webp" alt="" />
            </button>
        </div>
    </div>
    </div>
  )
}

export default Grid2